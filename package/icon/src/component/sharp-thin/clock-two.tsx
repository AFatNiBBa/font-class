
import { Icon } from "../../index";

/**
 * A component that renders the `clock-two` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two?s=sharp-thin clock-two}
 * @preview ![clock-two](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clock-two.svg)
 */
const ClockTwo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 104l0 137.1 83.6-55.7 6.7-4.4 8.9 13.3-6.7 4.4-96 64L248 270.9l0-14.9 0-152 0-8 16 0 0 8z" />
    </Icon>
);

export default ClockTwo;