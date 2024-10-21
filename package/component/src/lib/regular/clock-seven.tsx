
import { Icon } from "../../index";

/**
 * A component that renders the `clock-seven` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-seven?s=regular clock-seven}
 * @preview ![clock-seven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clock-seven.svg)
 */
const ClockSeven: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 128.7-60 90c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l64-96c2.6-3.9 4-8.6 4-13.3l0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </Icon>
);

export default ClockSeven;