
import { Icon } from "../../index";

/**
 * A component that renders the `clock-two` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two?s=thin clock-two}
 * @preview ![clock-two](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock-two.svg)
 */
const ClockTwo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 104l0 137.1 83.6-55.7c3.7-2.5 8.6-1.5 11.1 2.2s1.5 8.6-2.2 11.1l-96 64c-2.5 1.6-5.6 1.8-8.2 .4s-4.2-4.1-4.2-7.1l0-152c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default ClockTwo;