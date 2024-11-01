
import { fontToComponentDir } from "./lib/convert";
import { basename, extname, join } from "path";
import { readdir, rm } from "fs/promises";

/** The source folder */
const source = join(import.meta.dirname, "../font");

/** The destination folder */
const dest = join(import.meta.dirname, "../../ui/src/component");

// Removes the old output
await rm(dest, { recursive: true });

// Converts the fonts SYNCHRONOUSLY, it would be too intensive to do it in parallel
for (const elm of await readdir(source)) {
    const name = basename(elm, extname(elm));
    await fontToComponentDir(name, join(source, elm), join(dest, name));
    console.log("-", name);
}

// Done
console.log("Completed");