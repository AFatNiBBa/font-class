
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down?s=sharp-regular square-arrow-down}
 * @preview ![square-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-arrow-down.svg)
 */
const SquareArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 432l0-352L48 80l0 352 352 0zm48 48l-48 0L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 352 0 48zM207 393l-88-88-17-17L136 254.1l17 17 47 47L200 136l0-24 48 0 0 24 0 182.1 47-47 17-17L345.9 288l-17 17-88 88-17 17-17-17z" />
    </Icon>
);

export default SquareArrowDown;