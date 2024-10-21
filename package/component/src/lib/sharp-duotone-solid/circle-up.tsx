
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up?s=sharp-duotone-solid circle-up}
 * @preview ![circle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-up.svg)
 */
const CircleUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-32L256 96 384 224l0 32-80 0c0 42.7 0 85.3 0 128l-96 0 0-128-80 0 0-32z" />
        <path d="M304 256l80 0 0-32L256 96 128 224l0 32 80 0 0 128 96 0 0-128z" />
    </Icon>
);

export default CircleUp;