
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-right?s=sharp-thin square-caret-right}
 * @preview ![square-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-caret-right.svg)
 */
const SquareCaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48L16 48l0 416 416 0 0-416zm16-16l0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 416 0 16 0zM160 128l16 0 24 0L320 256 200 384l-24 0-16 0 0-16 0-224 0-16zm33.1 240l105-112-105-112L176 144l0 224 17.1 0z" />
    </Icon>
);

export default SquareCaretRight;