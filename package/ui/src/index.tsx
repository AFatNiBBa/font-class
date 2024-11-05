
import anim from "./style/anim.module.scss";
import generic from "./style/generic.module.scss";
import internal from "./style/internal.module.scss";

import { ComponentProps, splitProps } from "solid-js";
import { isServer } from "solid-js/web";

export * from "./custom";
export { anim, generic };

/**
 * Creates a new icon component based on the provided font
 * @param id The unique identifier of both the new font and the class that will apply it
 * @param hasSecondary Whether the icon has a secondary part
 * @param fontUrl The URL of the WOFF2 font file containing the glyphs
 */
export function createIcon(id: string, hasSecondary: boolean, fontUrl: string) {
	if (!isServer) document.head.insertAdjacentHTML("beforeend", createIconStyle(id, fontUrl));
	Icon.id = id;
	return Icon;
	
	/** Component that creates an {@link HTMLSpanElement} that renders the chosen icon */
	function Icon(props: ComponentProps<"span">) {
		const [ mine, other ] = splitProps(props, [ "class" ]);
		return <span class={`${id} ${internal.icon} ${hasSecondary ? internal.duotone : ""} ${mine.class ?? ""}`} {...other} />
	}
}

/**
 * Creates the source HTML of a style sheet that defines a new icon font
 * @param id The unique identifier of both the new font and the class that will apply it
 * @param fontUrl The URL of the WOFF2 font file containing the glyphs
 */
function createIconStyle(id: string, fontUrl: string) {
	return `
		<style>
			.${id} { font-family: "${id}"; }

			@font-face {
				font-family: "${id}";
				src: url("${fontUrl}") format("woff2");
			}
		</style>
	`;
}