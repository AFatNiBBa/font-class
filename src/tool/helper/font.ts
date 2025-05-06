
import { camelToFontAwesome, FontInfo, STARTING_CODE_POINT } from "../../common";
import { Font, woff2, type TTF } from "fonteditor-core";
import { existsSync, readFileSync } from "fs";
import { HEAD, HHEA, OS2 } from "./meta";
import { createHash } from "crypto";
import { TTFEditor } from "./ttf";
import { join } from "path";

// Loads the WOFF2 module, since that's the format we're generating the font in
await woff2.init();

/** Type that represents an object that maps from a namespace to some of their icons */
export type FontInput = Record<string, string[]>;

/**
 * Generates a font from the requested icons
 * @param fontDirPath The path to the directory containing the font files
 * @param icons The requested icons
 */
export function getFont(fontDirPath: string, icons: FontInput) {
	const { font: newFont, ttf } = createNewFont(), info: FontInfo = [];
	var codePoint = STARTING_CODE_POINT;

	for (const k in icons) {
		const namespace = camelToFontAwesome(k);
		const path = join(fontDirPath, `${namespace}.ttf`);
		if (!existsSync(path)) throw new Error(`The ${JSON.stringify(k)} font wasn't found in the ${JSON.stringify(fontDirPath)} directory`);
		const oldFont = Font.create(readFileSync(path), { type: "ttf" });
		const map = Iterator.from(oldFont.get().glyf).reduce((obj, v) => obj.set(v.name, v), new Map<string, TTF.Glyph>);

		for (const icon of icons[k]) {
			const baseName = camelToFontAwesome(icon);
			const baseIcon = map.get(baseName);
			const stub = `${namespace}_${baseName}`;
			
			if (baseIcon) {
				ttf.addGlyf({ ...baseIcon, unicode: [ codePoint++ ] });
				info.push([ stub, false ]);
				continue;
			}

			const primaryIcon = map.get(`${baseName}-primary`);
			const secondaryIcon = map.get(`${baseName}-secondary`);
			if (!primaryIcon || !secondaryIcon) throw new Error(`The ${JSON.stringify(icon)} icon wasn't found in the ${JSON.stringify(k)} font`);
			ttf.addGlyf({ ...primaryIcon, unicode: [ codePoint++ ] });
			ttf.addGlyf({ ...secondaryIcon, unicode: [ codePoint++ ] });
			info.push([ stub, true ]);
		}
	}

	ttf.optimize();
	const buffer = <Buffer>newFont.write({ type: "woff2" });
	const hash = createHash("sha256").update(buffer).digest("hex").substring(0, 8);
	const url = `data:font/woff2;base64,${buffer.toString("base64")}`;
	return { url, id: hash, info };
} 

/**
 * Creates a new empty font with some standard metadata
 * @returns An object containing the new font and its TTF editor
 */
function createNewFont() {
	const font = new Font(), ttf = new TTFEditor(font.get());
	ttf.ttf.name = {} as any; // Completely removes the name table to make the font lighter 
	ttf.setHead(HEAD);
	ttf.setHhea(HHEA);
	ttf.setOS2(OS2);
	return { font, ttf };
}