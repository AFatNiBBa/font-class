
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eleven` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven?s=light clock-eleven}
 * @preview ![clock-eleven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clock-eleven.svg)
 */
const ClockEleven: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112l0 91.2-34.7-52c-4.9-7.4-14.8-9.3-22.2-4.4s-9.3 14.8-4.4 22.2l64 96c3.9 5.9 11.2 8.5 17.9 6.4s11.4-8.3 11.4-15.3l0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
    </Icon>
);

export default ClockEleven;