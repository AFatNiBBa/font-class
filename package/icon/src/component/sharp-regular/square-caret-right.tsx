
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-right?s=sharp-regular square-caret-right}
 * @preview ![square-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-caret-right.svg)
 */
const SquareCaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80L48 80l0 352 352 0 0-352zm48-48l0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0zM192 128L320 256 192 384l-32 0 0-256 32 0z" />
    </Icon>
);

export default SquareCaretRight;