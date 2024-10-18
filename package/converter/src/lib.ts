
import { exists, mkdir, readdir, readFile, writeFile } from "fs/promises";
import { basename, extname, join } from "path";
import { sanitize } from "./util";

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
    const component = svgToComponent(svg.toString(), name);
    if (!exists(dest)) await mkdir(dest, { recursive: true });
    await writeFile(join(dest, output), component);
}

/**
 * Converts the source of an SVG to the source of a TSX component
 * @param svg The source of an SVG
 * @param name The name of the component
 */
export function svgToComponent(svg: string, name = "") {
    return `
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

export default function ${sanitize(name)}(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            
        </Icon>
    </>
}
    `;
}