
import { Icon } from "../../index";

/**
 * A component that renders the `square-down-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down-left?s=sharp-regular square-down-left}
 * @preview ![square-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-down-left.svg)
 */
const SquareDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 432L48 80l352 0 0 352L48 432zM0 480l48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32 0 32 0 80 0 432l0 48zM128 192l0 160 160 0 24-24-52-52 76-76-56-56-76 76-52-52-24 24z" />
    </Icon>
);

export default SquareDownLeft;