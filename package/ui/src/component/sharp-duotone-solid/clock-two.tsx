
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-two` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two?s=sharp-duotone-solid clock-two}
 * @preview ![clock-two](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-two.svg)
 */
const ClockTwo: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 96l48 0 0 24 0 91.2L338.7 172l20-13.3 26.6 39.9-20 13.3-96 64L232 300.8l0-44.8 0-136 0-24z" />
        <path d="M280 96l0 24 0 91.2L338.7 172l20-13.3 26.6 39.9-20 13.3-96 64L232 300.8l0-44.8 0-136 0-24 48 0z" />
    </Icon>
);

export default ClockTwo;