
import { transformAsync, type TransformOptions } from "@babel/core";
import { createFontPlugin } from "./helper/plugin";
import { readFile, writeFile } from "fs/promises";
import { name } from "../../package.json";
import { join } from "path";

//                                                     ↓ Relative to the build directory
const [ path, fontDirPath = join(import.meta.dirname, "../../font") ] = process.argv.slice(2);
if (!path) throw new Error("No input file specified");

const config: TransformOptions = {
	filename: path,
	plugins: [
		"@babel/plugin-syntax-typescript",
		createFontPlugin(fontDirPath, name, "createFont")
	]
};

const input = await readFile(path, "utf-8");
const output = await transformAsync(input, config).then(x => x!.code!);
await writeFile(path, output);