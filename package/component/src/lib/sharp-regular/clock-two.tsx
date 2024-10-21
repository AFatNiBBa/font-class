
import { Icon } from "../../index";

/**
 * A component that renders the `clock-two` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two?s=sharp-regular clock-two}
 * @preview ![clock-two](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clock-two.svg)
 */
const ClockTwo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM280 120l0 91.2L338.7 172l20-13.3 26.6 39.9-20 13.3-96 64L232 300.8l0-44.8 0-136 0-24 48 0 0 24z" />
    </Icon>
);

export default ClockTwo;