
import dedent from "dedent-js";
import { mkdir, readdir, readFile, rm, writeFile } from "fs/promises";
import { basename, extname, join } from "path";
import { pascalCase } from "change-case";
import { parseSvg } from "./parse";

/** Regular expressions that tells whether a string starts with a digit */
const REGEX_STARTS_WITH_DIGIT = /^\d/;

/** The string that joins each {@link SVGPathElement} of an icon created by {@link svgToComponent} */
const PATH_SEPARATOR = `\n${" ".repeat(8)}`;

/**
 * Sanitizes a name to be used as a TSX component identifier
 * @param name The name of the component
 */
function sanitize(name: string) {
    const out = pascalCase(name);
    return out.match(REGEX_STARTS_WITH_DIGIT) ? "$" + out : out;
}

/**
 * Converts all the SVGs in {@link source} to TSX components in {@link dest}
 * @param source The source directory
 * @param dest The destination directory
 * @param nameSpace The name of the current directory
 */
export async function svgToComponentDir(source: string, dest: string, nameSpace: string) {
    await rm(dest, { recursive: true });
    await mkdir(dest, { recursive: true });
    const files = await readdir(source, { withFileTypes: true });
    await Promise.all(files.map(x => svgToComponentEntry(source, dest, x.name, nameSpace, x.isDirectory())));
}

/**
 * Converts the SVGs in the current file/directory in TSX components
 * @param source The parent source directory
 * @param dest The destination directory
 * @param input The name of the current entry
 * @param nameSpace The name of the parent entry
 * @param isDir Whether the current entry is a directory
 */
export async function svgToComponentEntry(source: string, dest: string, input: string, nameSpace: string, isDir: boolean) {
    const sub = join(source, input);
    if (isDir) return svgToComponentDir(sub, join(dest, input), input);
    const name = basename(input, extname(input)), output = `${name}.tsx`;
    const svg = await readFile(sub);
    const component = svgToComponent(name, nameSpace, svg.toString());
    await writeFile(join(dest, output), component);
}

/**
 * Converts the source of an SVG to the source of a TSX component
 * @param name The name of the SVG
 * @param nameSpace The name of the section of the icon
 * @param source The source of the SVG
 */
export function svgToComponent(name: string, nameSpace: string, source: string) {
    const info = parseSvg(source), id = sanitize(name);
    const children = info.path.map(x => `<path ${x.isSecondary ? "class={generic.secondary} " : ""}d="${x.d}" />`);
    return dedent`

        import { Icon${info.path.some(x => x.isSecondary) ? ", generic" : ""} } from "../../index";

        /**
         * A component that renders the \`${name}\` icon from the \`${nameSpace}\` section of Font Awesome 6.6 Pro
         * @see {@link https://fontawesome.com/icons/${name}?s=${nameSpace} ${name}}
         * @preview ![${name}](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/${nameSpace}/${name}.svg)
         */
        const ${id}: typeof Icon = x => (
            <Icon ${info.viewBox ? `viewBox="${info.viewBox}" ` : ""}{...x}>
                ${children.join(PATH_SEPARATOR)}
            </Icon>
        );

        export default ${id};
    `;
}