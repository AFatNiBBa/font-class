
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter-stroke` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter-stroke?s=solid circle-quarter-stroke}
 * @preview ![circle-quarter-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-quarter-stroke.svg)
 */
const CircleQuarterStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 256l160 0c17.7 0 32-14.3 32-32l0-160c106 0 192 86 192 192s-86 192-192 192S64 362 64 256zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256z" />
    </Icon>
);

export default CircleQuarterStroke;