
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-left?s=sharp-solid square-caret-left}
 * @preview ![square-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-caret-left.svg)
 */
const SquareCaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32L0 480l448 0 0-448L0 32zM256 384L128 256 256 128l32 0 0 256-32 0z" />
    </Icon>
);

export default SquareCaretLeft;