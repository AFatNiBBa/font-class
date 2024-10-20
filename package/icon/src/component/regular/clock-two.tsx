
import { Icon } from "../../index";

/**
 * A component that renders the `clock-two` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two?s=regular clock-two}
 * @preview ![clock-two](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clock-two.svg)
 */
const ClockTwo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM280 120l0 91.2L338.7 172c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3l-96 64c-7.4 4.9-16.8 5.4-24.6 1.2S232 264.9 232 256l0-136c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default ClockTwo;