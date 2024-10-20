
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-eleven` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven?s=sharp-duotone-solid clock-eleven}
 * @preview ![clock-eleven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-eleven.svg)
 */
const ClockEleven: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM158.7 153.3l39.9-26.6 13.3 20 20 30 0-56.7 0-24 48 0 0 24 0 136-44 13.3-64-96-13.3-20z" />
        <path d="M232 96l0 24 0 56.7-20-30-13.3-20-39.9 26.6 13.3 20 64 96L280 256l0-136 0-24-48 0z" />
    </Icon>
);

export default ClockEleven;