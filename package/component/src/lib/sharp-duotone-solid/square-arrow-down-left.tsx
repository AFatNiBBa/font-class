
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-arrow-down-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-left?s=sharp-duotone-solid square-arrow-down-left}
 * @preview ![square-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-arrow-down-left.svg)
 */
const SquareArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM112 160l48 0 0 24 0 102.1L295 151l17-17L345.9 168l-17 17-135 135 94.1 0 24 0 0 48-24 0-152 0-24 0 0-24 0-160 0-24z" />
        <path d="M112 368l24 0 152 0 24 0 0-48-24 0-94.1 0L329 185l17-17L312 134.1l-17 17-135 135L160 184l0-24-48 0 0 24 0 160 0 24z" />
    </Icon>
);

export default SquareArrowDownLeft;