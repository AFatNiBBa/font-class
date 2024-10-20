
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-left?s=sharp-regular square-caret-left}
 * @preview ![square-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-caret-left.svg)
 */
const SquareCaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 432l352 0 0-352L48 80l0 352zM0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480zm256-96L128 256 256 128l32 0 0 256-32 0z" />
    </Icon>
);

export default SquareCaretLeft;