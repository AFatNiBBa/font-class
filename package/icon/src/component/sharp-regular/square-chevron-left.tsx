
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-left?s=sharp-regular square-chevron-left}
 * @preview ![square-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-chevron-left.svg)
 */
const SquareChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 432l352 0 0-352L48 80l0 352zM0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480zM135 239L239 135l17-17L289.9 152l-17 17-87 87 87 87 17 17L256 393.9l-17-17L135 273l-17-17 17-17z" />
    </Icon>
);

export default SquareChevronLeft;