
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-down?s=sharp-thin circle-caret-down}
 * @preview ![circle-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-caret-down.svg)
 */
const CircleCaretDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480zm0 496A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM128 192l16 0 224 0 16 0 0 16 0 24L256 352 128 232l0-24 0-16zm240 33.1l0-17.1-224 0 0 17.1 112 105 112-105z" />
    </Icon>
);

export default CircleCaretDown;