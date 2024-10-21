
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter-stroke` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter-stroke?s=sharp-light circle-quarter-stroke}
 * @preview ![circle-quarter-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-quarter-stroke.svg)
 */
const CircleQuarterStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256C480 132.3 379.7 32 256 32l0 208c0 8.8-7.2 16-16 16L32 256c0 123.7 100.3 224 224 224s224-100.3 224-224zM224 34.3C125.9 48.3 48.3 125.9 34.3 224L224 224l0-189.7zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleQuarterStroke;