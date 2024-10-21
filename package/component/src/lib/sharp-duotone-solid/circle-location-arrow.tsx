
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-location-arrow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-location-arrow?s=sharp-duotone-solid circle-location-arrow}
 * @preview ![circle-location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-location-arrow.svg)
 */
const CircleLocationArrow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm86.3-11.3c94.3-33.9 188.6-67.9 282.8-101.8c-33.9 94.3-67.9 188.6-101.8 282.8L233.4 278.6 86.3 244.7z" />
        <path d="M86.3 244.7l147.1 33.9 33.9 147.1L369.1 142.9 86.3 244.7z" />
    </Icon>
);

export default CircleLocationArrow;