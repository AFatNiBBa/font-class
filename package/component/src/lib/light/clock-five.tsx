
import { Icon } from "../../index";

/**
 * A component that renders the `clock-five` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five?s=light clock-five}
 * @preview ![clock-five](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clock-five.svg)
 */
const ClockFive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 112l0 139.2 61.3 92c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-64-96c-1.8-2.6-2.7-5.7-2.7-8.9l0-144c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default ClockFive;