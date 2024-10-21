
import { Icon } from "../../index";

/**
 * A component that renders the `circle-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-right?s=sharp-thin circle-right}
 * @preview ![circle-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-right.svg)
 */
const CircleRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm256-32l16 0 0-16 0-64 1.4 0 112 112-112 112-1.4 0 0-64 0-16-16 0-112 0 0-64 112 0zm140.7 20.7L280 128l-8 0-16 0 0 16 0 48 0 16-16 0-96 0-16 0 0 16 0 64 0 16 16 0 96 0 16 0 0 16 0 48 0 16 16 0 8 0L396.7 267.3 408 256l-11.3-11.3z" />
    </Icon>
);

export default CircleRight;