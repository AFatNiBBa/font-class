
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-arrow-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up-right?s=sharp-duotone-solid square-arrow-up-right}
 * @preview ![square-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-arrow-up-right.svg)
 */
const SquareArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM102.1 344L136 377.9l17-17 135-135L288 328l0 24 48 0 0-24 0-160 0-24-24 0-152 0-24 0 0 48 24 0 94.1 0L119 327l-17 17z" />
        <path d="M336 144l-24 0-152 0-24 0 0 48 24 0 94.1 0L119 327l-17 17L136 377.9l17-17 135-135L288 328l0 24 48 0 0-24 0-160 0-24z" />
    </Icon>
);

export default SquareArrowUpRight;