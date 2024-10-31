
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-caret-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-left?s=sharp-duotone-solid square-caret-left}
 * @preview ![square-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-caret-left.svg)
 */
const SquareCaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM128 256L256 384l32 0 0-256-32 0L128 256z" />
        <path d="M288 384l-32 0L128 256 256 128l32 0 0 256z" />
    </Icon>
);

export default SquareCaretLeft;