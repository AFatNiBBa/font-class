
import { Icon } from "../../index";

/**
 * A component that renders the `square-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-left?s=sharp-regular square-left}
 * @preview ![square-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-left.svg)
 */
const SquareLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 432l352 0 0-352L48 80l0 352zM0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480zM192 368L96 256l96-112 32 0 0 64 128 0 0 96-128 0 0 64-32 0z" />
    </Icon>
);

export default SquareLeft;