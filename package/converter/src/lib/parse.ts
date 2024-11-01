
import { Font, FontEditor, type TTF } from "fonteditor-core";
import { TTFEditor } from "./ttf.ts";

/** Regular expression that extracts the real name and the {@link Part} from a glyph */
const REGEX_GET_PART = /^(.*)-(primary|secondary)$/;

/** Object that contains the parts of an icon */
export type Icon = { [Part.primary]: TTF.Glyph, [Part.secondary]?: TTF.Glyph };

/** Metadata abount an icon part */
type Meta = { icon: string, part: Part, glyph: TTF.Glyph };

/** The name of the part of the icon a certain glyph represents */
enum Part { primary = "primary", secondary = "secondary" }

/**
 * Gets a new font that contains only the glyphs of {@link Icon}
 * @param icon The parts of the icon
 * @param parent The font that contains the icon
 */
export function getFontFromIcon(icon: Icon, parent: FontEditor.Font) {
    const out = new Font(), ttf = new TTFEditor(out.get()), old = parent.get();
    const { primary, secondary } = icon;
    var codePoint = 0xe001;
    ttf.setHead(old.head);
    ttf.setOS2(old["OS/2"]);
    ttf.addGlyf({ ...primary, unicode: [ codePoint++ ] });
    if (secondary) ttf.addGlyf({ ...secondary, unicode: [ codePoint++ ] });
    return out;
}

/**
 * Gets an object that maps each icon name to its parts
 * @param font The font from which to extract the icons
 */
export function getIconsFromFont(font: FontEditor.Font) {
    const meta = Iterator.from(font.get().glyf).drop(1).map(getMetaFromGlyph); // Skips the ".notdef" glyph, which is always the first glyph of the font
    const icon = Object.groupBy(meta, x => x.icon);
    const groupByPart = (x: Meta[] | undefined) => x!.reduce((map, x) => (map[x.part] = x.glyph, map), {} as Icon);
    return mapObject(icon, groupByPart);
}

/**
 * Gets the icon information from one of its glyphs
 * @param glyph The glyph from which to extract the icon information
 */
function getMetaFromGlyph(glyph: TTF.Glyph): Meta {
    const match = glyph.name.match(REGEX_GET_PART);
    if (!match) return { glyph, icon: glyph.name, part: Part.primary };
    const [ , name, part ] = match;
    return { glyph, icon: name, part: part as Part };
}

/**
 * Returns an object with the same properties as the input object, but with the values transformed by {@link f}
 * @param obj The object to map
 * @param f The transformation function
 */
function mapObject<T, R>(obj: T, f: (x: T[keyof T]) => R) {
    const out = {} as { [k in keyof T]: R };
    for (const k in obj) 
        out[k] = f(obj[k]);
    return out;
}