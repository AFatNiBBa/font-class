
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-right?s=sharp-solid square-caret-right}
 * @preview ![square-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-caret-right.svg)
 */
const SquareCaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480l0-448L0 32 0 480l448 0zM192 128L320 256 192 384l-32 0 0-256 32 0z" />
    </Icon>
);

export default SquareCaretRight;