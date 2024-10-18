
import { svgToComponentDir } from "./lib";
import { join } from "path";

/** The source folder */
const source = join(import.meta.dirname, "../svg");

/** The destination folder */
const dest = join(import.meta.dirname, "../../icon/src/component");

await svgToComponentDir(source, dest);
console.log("Completed");