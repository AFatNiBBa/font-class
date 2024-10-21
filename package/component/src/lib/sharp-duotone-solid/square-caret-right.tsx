
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-caret-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-right?s=sharp-duotone-solid square-caret-right}
 * @preview ![square-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-caret-right.svg)
 */
const SquareCaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm160 96l32 0L320 256 192 384l-32 0 0-256z" />
        <path d="M160 128l32 0L320 256 192 384l-32 0 0-256z" />
    </Icon>
);

export default SquareCaretRight;