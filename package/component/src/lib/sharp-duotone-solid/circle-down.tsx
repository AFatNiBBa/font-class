
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=sharp-duotone-solid circle-down}
 * @preview ![circle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-down.svg)
 */
const CircleDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0l80 0 0-128 96 0c0 42.7 0 85.3 0 128l80 0 0 32L256 416 128 288l0-32z" />
        <path d="M304 256l80 0 0 32L256 416 128 288l0-32 80 0 0-128 96 0 0 128z" />
    </Icon>
);

export default CircleDown;