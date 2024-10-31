
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up?s=sharp-thin circle-up}
 * @preview ![circle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-up.svg)
 */
const CircleUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 256l0-16-16 0-64 0 0-1.4 112-112 112 112 0 1.4-64 0-16 0 0 16 0 112-64 0 0-112zm20.7-140.7L128 232l0 8 0 16 16 0 48 0 16 0 0 16 0 96 0 16 16 0 64 0 16 0 0-16 0-96 0-16 16 0 48 0 16 0 0-16 0-8L267.3 115.3 256 104l-11.3 11.3z" />
    </Icon>
);

export default CircleUp;