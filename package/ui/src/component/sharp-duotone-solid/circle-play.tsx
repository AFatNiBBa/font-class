
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-play` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-play?s=sharp-duotone-solid circle-play}
 * @preview ![circle-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-play.svg)
 */
const CirclePlay: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM176 128L384 256 176 384l0-256z" />
        <path d="M176 384V128L384 256 176 384z" />
    </Icon>
);

export default CirclePlay;