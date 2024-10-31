
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-h` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-h?s=sharp-duotone-solid circle-h}
 * @preview ![circle-h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-h.svg)
 */
const CircleH: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM144 128l48 0 0 24 0 80 128 0 0-80 0-24 48 0 0 24 0 104 0 104 0 24-48 0 0-24 0-80-128 0 0 80 0 24-48 0 0-24 0-80 0-48 0-80 0-24z" />
        <path d="M368 128l0 24 0 104 0 104 0 24-48 0 0-24 0-80-128 0 0 80 0 24-48 0 0-24 0-80 0-48 0-80 0-24 48 0 0 24 0 80 128 0 0-80 0-24 48 0z" />
    </Icon>
);

export default CircleH;