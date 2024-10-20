
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-right?s=sharp-light circle-caret-right}
 * @preview ![circle-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-caret-right.svg)
 */
const CircleCaretRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM192 128l0 32 0 192 0 32 32 0 8 0L352 256 232 128l-8 0-32 0zM308.1 256L224 345.7l0-179.5L308.1 256z" />
    </Icon>
);

export default CircleCaretRight;