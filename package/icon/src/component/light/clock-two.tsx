
import { Icon } from "../../index";

/**
 * A component that renders the `clock-two` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two?s=light clock-two}
 * @preview ![clock-two](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clock-two.svg)
 */
const ClockTwo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 112l0 114.1 71.1-47.4c7.4-4.9 17.3-2.9 22.2 4.4s2.9 17.3-4.4 22.2l-96 64c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1l0-144c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default ClockTwo;