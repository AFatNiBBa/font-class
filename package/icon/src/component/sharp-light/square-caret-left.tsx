
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-left?s=sharp-light square-caret-left}
 * @preview ![square-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-caret-left.svg)
 */
const SquareCaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 448l384 0 0-384L32 64l0 384zM0 480l0-32L0 64 0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480zm288-96l-32 0-8 0L128 256 248 128l8 0 32 0 0 32 0 192 0 32zM171.9 256L256 345.8l0-179.5L171.9 256z" />
    </Icon>
);

export default SquareCaretLeft;