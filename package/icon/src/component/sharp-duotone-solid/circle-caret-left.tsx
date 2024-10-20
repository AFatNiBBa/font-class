
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-caret-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-left?s=sharp-duotone-solid circle-caret-left}
 * @preview ![circle-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-caret-left.svg)
 */
const CircleCaretLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144 0L272 128l32 0 0 256-32 0L144 256z" />
        <path d="M304 384l-32 0L144 256 272 128l32 0 0 256z" />
    </Icon>
);

export default CircleCaretLeft;