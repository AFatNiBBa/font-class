
import { Icon } from "../../index";

/**
 * A component that renders the `circle-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-left?s=sharp-thin circle-left}
 * @preview ![circle-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-left.svg)
 */
const CircleLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM256 288l-16 0 0 16 0 64-1.4 0-112-112 112-112 1.4 0 0 64 0 16 16 0 112 0 0 64-112 0zM115.3 267.3L232 384l8 0 16 0 0-16 0-48 0-16 16 0 96 0 16 0 0-16 0-64 0-16-16 0-96 0-16 0 0-16 0-48 0-16-16 0-8 0L115.3 244.7 104 256l11.3 11.3z" />
    </Icon>
);

export default CircleLeft;