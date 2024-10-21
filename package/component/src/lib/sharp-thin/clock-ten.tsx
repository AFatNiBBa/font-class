
import { Icon } from "../../index";

/**
 * A component that renders the `clock-ten` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten?s=sharp-thin clock-ten}
 * @preview ![clock-ten](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clock-ten.svg)
 */
const ClockTen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM248 104l0 137.1-83.6-55.7-6.7-4.4-8.9 13.3 6.7 4.4 96 64 12.4 8.3 0-14.9 0-152 0-8-16 0 0 8z" />
    </Icon>
);

export default ClockTen;