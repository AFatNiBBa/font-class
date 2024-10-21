
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters-stroke` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters-stroke?s=sharp-light circle-three-quarters-stroke}
 * @preview ![circle-three-quarters-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-three-quarters-stroke.svg)
 */
const CircleThreeQuartersStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M477.7 288L240 288l-16 0 0-16 0-237.7C115.4 49.8 32 143.2 32 256c0 123.7 100.3 224 224 224c112.8 0 206.2-83.4 221.7-192zm2.3-32C480 132.3 379.7 32 256 32l0 224 224 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleThreeQuartersStroke;