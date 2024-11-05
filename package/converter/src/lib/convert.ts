
import dedent from "dedent-js";
import { getFontFromIcon, getIconsFromFont, type Icon } from "./parse";
import { Font, FontEditor, woff2 } from "fonteditor-core";
import { mkdir, readFile, writeFile } from "fs/promises";
import { pascalCase } from "change-case";
import { createHash } from "crypto";
import { join } from "path";

/** Regular expressions that tells whether a string starts with a digit */
const REGEX_STARTS_WITH_DIGIT = /^\d/;

/**
 * Sanitizes a name to be used as a TSX component identifier
 * @param name The name of the component
 */
function sanitize(name: string) {
	const out = pascalCase(name);
	return out.match(REGEX_STARTS_WITH_DIGIT) ? "$" + out : out;
}

/**
 * Creates a directory of components from a font file
 * @param nameSpace The name of the font
 * @param source The path to the TTF font file
 * @param dest The path to the output directory
 */
export async function fontToComponentDir(nameSpace: string, source: string, dest: string) {
	await mkdir(dest, { recursive: true });
	const font = Font.create(await readFile(source), { type: "ttf" });
	const items = getIconsFromFont(font);
	await Promise.all(Object.entries(items).map(([ k, v ]) => fontToComponentFile(k, nameSpace, v, font, dest)));
}

/**
 * Creates a component from an {@link Icon} and writes it to a file
 * @param name The name of the icon
 * @param nameSpace The name of the font
 * @param icon The icon to convert
 * @param parent The font that contains the icon
 * @param dest The path to the output directory
 */
export async function fontToComponentFile(name: string, nameSpace: string, icon: Icon, parent: FontEditor.Font, dest: string) {
	const font = getFontFromIcon(icon, parent);
	await woff2.init();
	const buffer = <Buffer>font.write({ type: "woff2" });
	const hash = createHash("sha256").update(buffer).digest("hex").substring(0, 8);
	const url = `data:font/woff2;base64,${buffer.toString("base64")}`;
	const comp = fontToComponent(name, nameSpace, hash, !!icon.secondary?.contours.length, url); // If the glyph has an empty secondary part, it's not considered to have one, because it would be rendered as the ".notdef"
	await writeFile(join(dest, `${name}.tsx`), comp);
}

/**
 * Creates the actual source code of a component from an {@link Icon}
 * @param name The name of the icon
 * @param nameSpace The name of the font
 * @param hash The hash of the font file (Used to create the font id)
 * @param hasSecondary Whether the icon has a secondary part
 * @param fontUrl The URL of the WOFF2 font file containing the glyphs
 */
export function fontToComponent(name: string, nameSpace: string, hash: string, hasSecondary: boolean, fontUrl: string) {
	const id = sanitize(name);
	return dedent`

		import { createIcon } from "../../index";

		/**
		 * A component that renders the \`${name}\` icon from the \`${nameSpace}\` section of Font Awesome 6.6 Pro
		 * @see {@link https://fontawesome.com/icons/${name}?s=${nameSpace} ${name}}
		 * @preview ![${name}](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/${nameSpace}/${name}.svg)
		 */
		const ${id} = createIcon(${JSON.stringify(`_${nameSpace}_${name}_${hash}`)}, ${JSON.stringify(hasSecondary)}, ${JSON.stringify(fontUrl)});

		export default ${id};
	`;
}