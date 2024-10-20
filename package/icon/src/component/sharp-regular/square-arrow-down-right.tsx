
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-right?s=sharp-regular square-arrow-down-right}
 * @preview ![square-arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-arrow-down-right.svg)
 */
const SquareArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 432l0-352L48 80l0 352 352 0zm48 48l-48 0L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 352 0 48zM312 368l-152 0-24 0 0-48 24 0 94.1 0L119 185l-17-17L136 134.1l17 17 135 135L288 184l0-24 48 0 0 24 0 160 0 24-24 0z" />
    </Icon>
);

export default SquareArrowDownRight;