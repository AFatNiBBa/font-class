
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-right?s=sharp-regular circle-caret-right}
 * @preview ![circle-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-caret-right.svg)
 */
const CircleCaretRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 128l-32 0 0 256 32 0L368 256 240 128z" />
    </Icon>
);

export default CircleCaretRight;