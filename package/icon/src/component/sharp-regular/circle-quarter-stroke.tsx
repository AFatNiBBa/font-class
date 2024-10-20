
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter-stroke` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter-stroke?s=sharp-regular circle-quarter-stroke}
 * @preview ![circle-quarter-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-quarter-stroke.svg)
 */
const CircleQuarterStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256c0-114.9-93.1-208-208-208l0 208L48 256c0 114.9 93.1 208 208 208s208-93.1 208-208zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleQuarterStroke;