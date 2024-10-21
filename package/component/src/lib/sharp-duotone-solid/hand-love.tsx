
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-love` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-love?s=sharp-duotone-solid hand-love}
 * @preview ![hand-love](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-love.svg)
 */
const HandLove: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M-.6 328.5l29 27.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-240 0-32-64 0 0 32 0 160 0 96-96 0-32 0-96 0 0-224 0-96 0-32L128 0l0 32 0 304c0 1.5 0 3.1 .1 4.6L83.5 298.2l-29-27.6L-.6 328.5z" />
        <path d="M288 160l-64 0 0 160 64 0 0-160zm96 32l-64 0 0 128 64 0 0-128z" />
    </Icon>
);

export default HandLove;