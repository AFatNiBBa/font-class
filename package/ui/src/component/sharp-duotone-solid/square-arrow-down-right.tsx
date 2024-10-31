
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-arrow-down-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-right?s=sharp-duotone-solid square-arrow-down-right}
 * @preview ![square-arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-arrow-down-right.svg)
 */
const SquareArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM102.1 168L136 134.1l17 17 135 135L288 184l0-24 48 0 0 24 0 160 0 24-24 0-152 0-24 0 0-48 24 0 94.1 0L119 185l-17-17z" />
        <path d="M336 368l-24 0-152 0-24 0 0-48 24 0 94.1 0L119 185l-17-17L136 134.1l17 17 135 135L288 184l0-24 48 0 0 24 0 160 0 24z" />
    </Icon>
);

export default SquareArrowDownRight;