
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-left?s=sharp-thin square-caret-left}
 * @preview ![square-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-caret-left.svg)
 */
const SquareCaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 464l416 0 0-416L16 48l0 416zM0 480l0-16L0 48 0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480zm288-96l-16 0-24 0L128 256 248 128l24 0 16 0 0 16 0 224 0 16zM254.9 144l-105 112 105 112 17.1 0 0-224-17.1 0z" />
    </Icon>
);

export default SquareCaretLeft;