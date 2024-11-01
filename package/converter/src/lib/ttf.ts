
import FontEditor, { type TTF } from "fonteditor-core";

/** Typed version of {@link FontEditor.TTF} */
export const TTFEditor = FontEditor.TTF as typeof TTF;
export type TTFEditor = TTF;

/** Partial type declaration for instances of {@link TTFEditor} */
declare class TTF {
    constructor(ttf: TTF.TTFObject);

    /**
     * Clones the {@link TTF.TTFObject.head} part of another font into the current one
     * @param head The informations to clone
     */
    setHead(head: Partial<TTF.Head>): void;

    /**
     * Clones the {@link TTF.TTFObject["OS/2"]} part of another font into the current one
     * @param os2 The informations to clone
     */
    setOS2(os2: TTF.OS2): void;

    /**
     * Adds a glyph to the current font
     * @param glyph The glyph to add to the font
     */
    addGlyf(glyph: TTF.Glyph): void;
}