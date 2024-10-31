
import anim from "./style/anim.module.scss";
import generic from "./style/generic.module.scss";
import internal from "./style/internal.module.scss";

import { ComponentProps, createUniqueId, splitProps } from "solid-js";

export * from "./custom";
export { anim, generic };

/**
 * Register an icon to be used in the application
 * @param name An hint name of the icon
 * @param hasSecondary Whether the icon has a secondary part
 * @param fontUrl The URL of the WOFF2 font file containing the glyphs
 */
export function createIcon(name: string, hasSecondary: boolean, fontUrl: string) {
    const id = `${name}-${createUniqueId()}`;

    // Style
    document.head.insertAdjacentHTML("beforeend", `
        <style>
            @font-face {
                font-family: "${id}";
                src: url("${fontUrl}") format("woff2");
            }

            .${id} { font-family: "${id}"; }
        </style>
    `);

    // Component
    return (props: ComponentProps<"span">) => {
        const [ mine, other ] = splitProps(props, [ "class" ]);
        return <span class={`${id} ${internal.icon} ${hasSecondary ? internal.duotone : ""} ${mine.class ?? ""}`} {...other} />
    };
}