
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-down-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-left?s=sharp-duotone-solid circle-arrow-down-left}
 * @preview ![circle-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-arrow-down-left.svg)
 */
const CircleArrowDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-96l48 0 0 24 0 102.1L327 151l17-17L377.9 168l-17 17-135 135 94.1 0 24 0 0 48-24 0-152 0-24 0 0-24 0-160 0-24z" />
        <path d="M144 368l24 0 152 0 24 0 0-48-24 0-94.1 0L361 185l17-17L344 134.1l-17 17-135 135L192 184l0-24-48 0 0 24 0 160 0 24z" />
    </Icon>
);

export default CircleArrowDownLeft;