
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=sharp-thin circle-down}
 * @preview ![circle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-down.svg)
 */
const CircleDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480zm0 496A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM224 256l0 16-16 0-64 0 0 1.4 112 112 112-112 0-1.4-64 0-16 0 0-16 0-112-64 0 0 112zm20.7 140.7L128 280l0-8 0-16 16 0 48 0 16 0 0-16 0-96 0-16 16 0 64 0 16 0 0 16 0 96 0 16 16 0 48 0 16 0 0 16 0 8L267.3 396.7 256 408l-11.3-11.3z" />
    </Icon>
);

export default CircleDown;