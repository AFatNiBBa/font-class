#!/usr/bin/env node

import MagicString from "magic-string";
import { State, VISITOR } from "./helper/visitor";
import { readFile, writeFile } from "fs/promises";
import { parse, traverse } from "@babel/core";
import { name } from "../../package.json";
import { join } from "path";

//                                                     ↓ Relative to the build directory
const [ path, fontDirPath = join(import.meta.dirname, "../../font") ] = process.argv.slice(2);
if (!path) throw new Error("No input file specified");

const input = await readFile(path, "utf-8");
const source = new MagicString(input);
const state: State = { source, fontDirPath, moduleName: name, funcName: "createFont" };
const ast = parse(input, { filename: path, plugins: [ "@babel/plugin-syntax-typescript" ] });
traverse(ast!, VISITOR, undefined, state);
await writeFile(path, source.toString());