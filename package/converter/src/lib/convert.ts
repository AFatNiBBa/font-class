
import dedent from "dedent-js";
import { exists, mkdir, readdir, readFile, writeFile } from "fs/promises";
import { basename, extname, join } from "path";
import { pascalCase } from "change-case";
import { parseSvg } from "./parse";

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
 * Converts all the SVGs in {@link source} to TSX components in {@link dest}
 * @param source The source directory
 * @param dest The destination directory
 */
export async function svgToComponentDir(source: string, dest: string) {
    const files = await readdir(source, { withFileTypes: true });
    await Promise.all(files.map(x => svgToComponentEntry(source, dest, x.name, x.isDirectory())));
}

/**
 * Converts the SVGs in the current file/directory in TSX components
 * @param source The parent source directory
 * @param dest The destination directory
 * @param input The current entry name
 * @param isDir Whether the current entry is a directory
 */
export async function svgToComponentEntry(source: string, dest: string, input: string, isDir: boolean) {
    const sub = join(source, input);
    if (isDir) return svgToComponentDir(sub, join(dest, input));
    const name = basename(input, extname(input)), output = `${name}.tsx`;
    const svg = await readFile(sub);
    const component = svgToComponent(name, basename(dest), svg.toString());
    if (!exists(dest)) await mkdir(dest, { recursive: true });
    await writeFile(join(dest, output), component);
}

/**
 * Converts the source of an SVG to the source of a TSX component
 * @param name The name of the SVG
 * @param nameSpace The name of the component's section
 * @param source The source of the SVG
 */
export function svgToComponent(name: string, nameSpace: string, source: string) {
    const info = parseSvg(source);
    const children = info.path.map(x => `<path ${x.isSecondary ? "opacity={.4} " : ""}d="${x.d}" />`);
    const sep = `\n${" ".repeat(12)}`;
    return dedent`

        import { ComponentProps } from "solid-js";
        import { Icon } from "../../index";

        /**
         * A component that renders the \`${name}\` icon from the \`${nameSpace}\` section of Font Awesome 6 Pro
         * @see {@link https://fontawesome.com/icons/${name}?s=${nameSpace} ${name}}
         * @preview ![${name}](data:image/svg+xml;base64,${btoa(source)}|width=32|height=32)
         */
        export default function ${sanitize(name)}(props: ComponentProps<typeof Icon>) {
            return <>
                <Icon ${info.viewBox ? `viewBox="${info.viewBox}" ` : ""}{...props}>
                    ${children.join(sep)}
                </Icon>
            </>
        }
    `;
}