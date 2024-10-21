
import { Icon } from "../../index";

/**
 * A component that renders the `clock-two` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two?s=sharp-light clock-two}
 * @preview ![clock-two](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clock-two.svg)
 */
const ClockTwo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 112l0 114.1 71.1-47.4 13.3-8.9 17.8 26.6-13.3 8.9-96 64L240 285.9l0-29.9 0-144 0-16 32 0 0 16z" />
    </Icon>
);

export default ClockTwo;