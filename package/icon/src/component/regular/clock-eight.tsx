
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eight` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eight?s=regular clock-eight}
 * @preview ![clock-eight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clock-eight.svg)
 */
const ClockEight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM280 120l0 136c0 8-4 15.5-10.7 20l-96 64c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3L232 243.2 232 120c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default ClockEight;