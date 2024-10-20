
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter-stroke` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter-stroke?s=light circle-quarter-stroke}
 * @preview ![circle-quarter-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-quarter-stroke.svg)
 */
const CircleQuarterStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256C480 132.3 379.7 32 256 32l0 176c0 26.5-21.5 48-48 48L32 256c0 123.7 100.3 224 224 224s224-100.3 224-224zM224 34.3C125.9 48.3 48.3 125.9 34.3 224L208 224c8.8 0 16-7.2 16-16l0-173.7zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleQuarterStroke;