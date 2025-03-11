
import anim from "./style/anim.module.scss";
import generic from "./style/generic.module.scss";
import internal from "./style/internal.module.scss";
import positioning from "./style/positioning.module.scss";

import { FontInfo, STARTING_CODE_POINT } from "../common";
import { FontOutput } from "../include/output";

export * from "./custom";
export { anim, generic, positioning };

/** Creates the CSS code for an icon */
const createIconClass = (icon: Icon, family: string) => `.${icon.class} { ${family}; ${createIconPseudo("after", icon.primary)} ${createIconPseudo("before", icon.secondary)} }`;

/** Creates the CSS code for an icon's part */
const createIconPseudo = (target: string, codePoint?: number) => codePoint == null ? "" : `&::${target} { content: "\\${codePoint.toString(16)}"; }`;

/** Handler that returns its target each time the {@link ProxyHandler.get} trap is called */
const IDENTITY_HANDLER: ProxyHandler<object> = { get: x => x };

/** Handler that removes the first element of its target and returns it each time the {@link ProxyHandler.get} trap is called */
const ICON_HANDLER: ProxyHandler<string[]> = {
	get(t, k) {
		const current = t.shift();
		if (current == null) throw new Error(`No more icons left while trying to get ${JSON.stringify(k)}, try running the font generator script again`);
		return `${current} ${internal.icon}`;
	}
};

/**
 * Creates an icon font from the given informations
 * @template T The declaration of the font output
 * @param url The url to the font file
 * @param id An identifier for the font
 * @param info Metadata about the font
 */
export function createFont<T extends Record<string, Record<string, string>> = FontOutput>(url: string, id: string, info: FontInfo) {
	var codePoint = STARTING_CODE_POINT;
	const font = info.map<Icon>(([ stub, composite ], i) => ({ class: `_${stub}_${id}_${i}`, primary: codePoint++, secondary: composite ? codePoint++ : undefined }));

	if (typeof document !== "undefined") {
		const fontId = `font-class-${id}`;
		const family = `font-family: "${fontId}"`;
		const src = `src: url("${url}") format("woff2")`;
		const face = `@font-face { ${family}; ${src}; }`;
		const items = font.map(x => createIconClass(x, family));
		document.head.insertAdjacentHTML("beforeend", `<style> ${face} ${items.join(" ")} </style>`);
	}
	
	const classList = font.map(x => x.class);
	const iconProxy = new Proxy(classList, ICON_HANDLER);
	const variantProxy = new Proxy(iconProxy, IDENTITY_HANDLER);
	return variantProxy as unknown as T;
}

/** Parsed informations about an icon */
interface Icon {
	class: string;
	primary: number;
	secondary?: number;
}