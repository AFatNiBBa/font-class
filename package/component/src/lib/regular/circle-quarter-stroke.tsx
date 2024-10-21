
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter-stroke` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter-stroke?s=regular circle-quarter-stroke}
 * @preview ![circle-quarter-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-quarter-stroke.svg)
 */
const CircleQuarterStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256c0-114.9-93.1-208-208-208c-1.4 0-2.9 0-4.3 0c2.7 4.6 4.3 10.1 4.3 16l0 160c0 17.7-14.3 32-32 32L64 256c-5.8 0-11.3-1.6-16-4.3c0 1.4 0 2.9 0 4.3c0 114.9 93.1 208 208 208s208-93.1 208-208zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleQuarterStroke;