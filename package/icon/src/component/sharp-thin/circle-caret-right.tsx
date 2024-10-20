
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-right?s=sharp-thin circle-caret-right}
 * @preview ![circle-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-caret-right.svg)
 */
const CircleCaretRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM192 128l0 16 0 224 0 16 16 0 24 0L352 256 232 128l-24 0-16 0zm33.1 240L208 368l0-224 17.1 0 105 112-105 112z" />
    </Icon>
);

export default CircleCaretRight;