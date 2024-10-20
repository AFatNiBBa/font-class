
import { Icon } from "../../index";

/**
 * A component that renders the `clock-nine` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-nine?s=regular clock-nine}
 * @preview ![clock-nine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clock-nine.svg)
 */
const ClockNine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM280 120l0 136c0 13.3-10.7 24-24 24l-104 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0 0-112c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default ClockNine;