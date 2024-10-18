
import { pascalCase } from "change-case";

/** Regular expressions that tells whether a string starts with a digit */
const REGEX_STARTS_WITH_DIGIT = /^\d/;

/**
 * Sanitizes a name to be used as a TSX component identifier
 * @param name The name of the component
 */
export function sanitize(name: string) {
    const out = pascalCase(name);
    return out.match(REGEX_STARTS_WITH_DIGIT)
        ? "$" + out
        : out;
}