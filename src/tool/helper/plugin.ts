
import { NodePath, type PluginObj, types } from "@babel/core";
import { FontInput, getFont } from "./font";
import { type createFont } from "../../lib";

/**
 * Creates a Babel plugin that automatically passes the right parameters to the {@link createFont} function
 * @param fontDirPath The path to the directory containing the font files
 * @param moduleName The name of the module by which the {@link createFont} function is exported
 * @param funcName The name by which the {@link createFont} function is exported
 */
export function createFontPlugin(fontDirPath: string, moduleName: string, funcName: string): PluginObj {
	return {
		visitor: {
			VariableDeclarator(path) {
				const declarator = getDeclarator(path, moduleName, funcName);
				if (!declarator) return;
				const icons = getIcons(declarator.id);
				const font = getFont(fontDirPath, icons);
				const composite = types.arrayExpression(font.info.map(([ k, v ]) => types.arrayExpression([ types.stringLiteral(k), types.booleanLiteral(v) ])));
				const args = [ types.stringLiteral(font.url), types.stringLiteral(font.id), composite ];
				declarator.init.node.arguments = args;
			}
		}
	};
}

/**
 * Gets informations about the font declaration.
 * If the current declaration is not a font declaration, returns `undefined`
 * @param path The syntax node of the declaration's assignment
 * @param moduleName The name of the module by which the {@link createFont} function is exported
 * @param funcName The name by which the {@link createFont} function is exported
 */
function getDeclarator(path: NodePath<types.VariableDeclarator>, moduleName: string, funcName: string) {

	// Verifies that the declaration is done through destructuring
	const id = path.get("id");
	if (!id.isObjectPattern()) return;

	// Verifies that the value is the result of a function call
	const init = path.get("init");
	if (!init.isCallExpression()) return;
	const callee = init.get("callee");
	if (!callee.isIdentifier()) return;

	// Verifies that the function is the one we're looking for
	const specifier = callee.scope.getBinding(callee.node.name)?.path;
	if (!specifier || !specifier.isImportSpecifier()) return;
	const imported = specifier.get("imported");
	if (!imported.isIdentifier() || imported.node.name !== funcName) return;
	const declaration = specifier.parentPath;
	if (!declaration.isImportDeclaration()) return;
	const source = declaration.get("source");
	if (source.node.value !== moduleName) return;
	return { id, init };
}

/**
 * Gets the required icons from the object destructuring of the font declaration
 * @param path The syntax node of the object destructuring that defines the required icons
 * @returns An object where the keys are the icon namespaces and the values are the icon names
 */
function getIcons(path: NodePath<types.ObjectPattern>) {
	const out: FontInput = {};

	for (const outer of path.get("properties")) {
		if (!outer.isObjectProperty()) throw outer.buildCodeFrameError("Icon namespaces must be statically analyzable");
		const key = outer.get("key");
		if (!key.isIdentifier()) throw key.buildCodeFrameError("Only identifiers are supported as icon namespaces");
		const value = outer.get("value");
		if (!value.isObjectPattern()) throw value.buildCodeFrameError("Icon namespaces can't be imported directly");

		const list = out[key.node.name] ??= [];
		for (const inner of value.get("properties")) {
			if (!inner.isObjectProperty()) throw inner.buildCodeFrameError("Icons must be statically analyzable");
			const key = inner.get("key");
			if (!key.isIdentifier()) throw key.buildCodeFrameError("Only identifiers are supported as icons");
			list.push(key.node.name);
		}
	}

	return out;
}