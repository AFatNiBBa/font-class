
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-left?s=sharp-regular square-arrow-left}
 * @preview ![square-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-arrow-left.svg)
 */
const SquareArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 432l352 0 0-352L48 80l0 352zM0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480zM87 239l88-88 17-17L225.9 168l-17 17-47 47L344 232l24 0 0 48-24 0-182.1 0 47 47 17 17L192 377.9l-17-17L87 273l-17-17 17-17z" />
    </Icon>
);

export default SquareArrowLeft;