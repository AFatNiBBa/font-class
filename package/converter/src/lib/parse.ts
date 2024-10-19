
import { parse } from "node-html-parser";

/** Attribute names used inside {@link parseSvg} */
const ATTR_VIEWBOX_NAME = "viewBox", ATTR_CLASS_NAME = "class", ATTR_D_NAME = "d";

/** Attribute values used to check against inside {@link parseSvg} */
const ATTR_VIEWBOX_DEFAULT = "0 0 512 512", ATTR_CLASS_SECONDARY = "fa-secondary";

/** Informations about an SVG path of an icon */
export type IconPathInfo = { d: string, isSecondary: boolean };

/** Informations about an SVG of an icon */
export type IconSvgInfo = { viewBox?: string, path: IconPathInfo[] };

/**
 * Parses in a readable manner the informations about an SVG
 * @param source The source of the SVG
 */
export function parseSvg(source: string) {
    const dom = parse(source).querySelector("svg")!;
    const path: IconPathInfo[] = [];
    const svg: IconSvgInfo = { path };

    const viewBox = dom.getAttribute(ATTR_VIEWBOX_NAME);
    if (viewBox !== ATTR_VIEWBOX_DEFAULT)
        svg.viewBox = viewBox;

    var d: string | undefined;
    for (const elm of dom.querySelectorAll(":scope > path"))
        if (d = elm.getAttribute(ATTR_D_NAME))
            path.push({ d, isSecondary: elm.getAttribute(ATTR_CLASS_NAME) === ATTR_CLASS_SECONDARY });

    return svg;
}