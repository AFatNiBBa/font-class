
import { defineConfig } from "vite";
import { join } from "path";

const REGEX_PATH = /^(?:\.|\w:)/;

const { dirname } = import.meta;

export default defineConfig({
	build: {
		minify: false,
		target: "EsNext",
		outDir: join(dirname, "dist"),
		rollupOptions: {
			//                                          ↓ Entry point         ↓ Things that are not a package
			external: (source, importer) => importer != null && !source.match(REGEX_PATH)
		},
		lib: {
			entry: join(dirname, "index.ts"),
			fileName: "index",
			formats: [ "es" ]
		}
	}
});