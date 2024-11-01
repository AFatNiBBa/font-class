
import anim from "./style/anim.module.scss";
import generic from "./style/generic.module.scss";
import internal from "./style/internal.module.scss";

import { ComponentProps, createUniqueId, splitProps } from "solid-js";

export * from "./custom";
export { anim, generic };

/**
 * Creates a new icon component based on the provided font
 * @param name An hint name of the icon
 * @param hasSecondary Whether the icon has a secondary part
 * @param fontUrl The URL of the WOFF2 font file containing the glyphs
 */
export function createIcon(name: string, hasSecondary: boolean, fontUrl: string) {
    const id = `${name}-${createUniqueId()}`;
    const ruleFamily = `font-family: "${id}";`, ruleSrc = `src: url("${fontUrl}") format("woff2");`;
    const blockFace = `@font-face { ${ruleFamily} ${ruleSrc} }`, blockClass = `.${id} { ${ruleFamily} }`;
    document.head.insertAdjacentHTML("beforeend", `<style> ${blockFace} ${blockClass} </style>`);
    Icon.id = id;
    return Icon;
    
    /** Component that creates an {@link HTMLSpanElement} that renders the chosen icon */
    function Icon(props: ComponentProps<"span">) {
        const [ mine, other ] = splitProps(props, [ "class" ]);
        return <span class={`${id} ${internal.icon} ${hasSecondary ? internal.duotone : ""} ${mine.class ?? ""}`} {...other} />
    }
}