
import { Icon } from "../../index";

/**
 * A component that renders the `clock-five` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five?s=sharp-thin clock-five}
 * @preview ![clock-five](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clock-five.svg)
 */
const ClockFive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 104l0 149.6 62.7 94 4.4 6.7-13.3 8.9-4.4-6.7-64-96-1.3-2 0-2.4 0-152 0-8 16 0 0 8z" />
    </Icon>
);

export default ClockFive;