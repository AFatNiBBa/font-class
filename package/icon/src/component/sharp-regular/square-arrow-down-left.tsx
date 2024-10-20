
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-left?s=sharp-regular square-arrow-down-left}
 * @preview ![square-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-arrow-down-left.svg)
 */
const SquareArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 432L48 80l352 0 0 352L48 432zM0 480l48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32 0 32 0 80 0 432l0 48zM136 368l152 0 24 0 0-48-24 0-94.1 0L329 185l17-17L312 134.1l-17 17-135 135L160 184l0-24-48 0 0 24 0 160 0 24 24 0z" />
    </Icon>
);

export default SquareArrowDownLeft;