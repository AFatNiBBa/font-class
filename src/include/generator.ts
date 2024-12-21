
import { readdir, readFile, writeFile } from "fs/promises";
import { basename, extname, join } from "path";
import { fontAwesomeToCamel } from "../common";
import { Font } from "fonteditor-core";
import { EOL } from "os";

// Font variants extraction
const fontDirPath = join(import.meta.dirname, "../font");
const variants = Iterator
	.from(await readdir(fontDirPath))
	.map(x => basename(x, extname(x)))
	.map(x => fontAwesomeToCamel(x));

// Font icons extraction
const nonCompositeFontPath = join(fontDirPath, "solid.ttf");
const font = Font.create(await readFile(nonCompositeFontPath), { type: "ttf" });
const icons = Iterator
	.from(font.get().glyf)
	.drop(1) // Skips the ".notdef" glyph, which is always the first glyph of the font
	.map(x => fontAwesomeToCamel(x.name));

// Output generation
const fontOutputDecl = `export type FontOutput = Record<Variant, Record<Icon, string>>;`;
const fontVariantsDecl = createTypeDecl("Variant", variants);
const fontIconsDecl = createTypeDecl("Icon", icons);
const out = EOL + fontOutputDecl + EOL + EOL + fontVariantsDecl + EOL + EOL + fontIconsDecl;

// Output writing
const outputPath = join(import.meta.dirname, "./output.ts");
await writeFile(outputPath, out);

/**
 * Creates a type declaration for a union of string literals
 * @param name The name for the new type
 * @param list The list of possible values
 */
function createTypeDecl(name: string, list: Iterable<string>) {
	const sep = `${EOL}\t`;
	const out = Iterator
		.from(list)
		.map(x => JSON.stringify(x))
		.map(x => `| ${x}`)
		.toArray()
		.join(sep);

	return `type ${name} =${sep}${out}${sep};`;
}