
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-up-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up-left?s=sharp-regular square-arrow-up-left}
 * @preview ![square-arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-arrow-up-left.svg)
 */
const SquareArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM136 144l152 0 24 0 0 48-24 0-94.1 0L329 327l17 17L312 377.9l-17-17-135-135L160 328l0 24-48 0 0-24 0-160 0-24 24 0z" />
    </Icon>
);

export default SquareArrowUpLeft;