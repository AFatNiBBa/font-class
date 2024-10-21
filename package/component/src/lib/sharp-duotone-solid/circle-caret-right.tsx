
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-caret-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-right?s=sharp-duotone-solid circle-caret-right}
 * @preview ![circle-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-caret-right.svg)
 */
const CircleCaretRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM208 128l0 256 32 0L368 256 240 128l-32 0z" />
        <path d="M208 128l32 0L368 256 240 384l-32 0 0-256z" />
    </Icon>
);

export default CircleCaretRight;