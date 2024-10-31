
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eleven` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven?s=sharp-thin clock-eleven}
 * @preview ![clock-eleven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clock-eleven.svg)
 */
const ClockEleven: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM248 104l0 125.6-49.3-74-4.4-6.7-13.3 8.9 4.4 6.7 64 96 14.7 22 0-26.4 0-152 0-8-16 0 0 8z" />
    </Icon>
);

export default ClockEleven;