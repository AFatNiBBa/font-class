
import { camelCase, kebabCase } from "change-case";

/** Regular expression that tells whether a string starts with a number */
const REGEX_STARTS_WITH_NUMBER = /^\d/;

/** Regular expression that tells whether a string starts with a dollar */
const REGEX_STARTS_WITH_DOLLAR = /^\$/;

/** Starting code point of each font created with this tool */
export const STARTING_CODE_POINT = 0xe001;

/** Type that represents an ordered list containing, for each icon, the main part of its CSS class and whether it's a duotone */
export type FontInfo = [ stub: string, composite: boolean ][];

/**
 * Converts a Font Awesome icon name to camel-case and puts a "$" in front of names that start with numbers
 * @param name The icon name to convert
 */
export const fontAwesomeToCamel = (name: string) => camelCase(name).replace(REGEX_STARTS_WITH_NUMBER, "$$$&");

/**
 * Reverts what {@link fontAwesomeToCamel} does
 * @param name The icon name to convert
 */
export const camelToFontAwesome = (name: string) => kebabCase(name).replace(REGEX_STARTS_WITH_DOLLAR, "");