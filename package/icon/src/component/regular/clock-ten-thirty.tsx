
import { Icon } from "../../index";

/**
 * A component that renders the `clock-ten-thirty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten-thirty?s=regular clock-ten-thirty}
 * @preview ![clock-ten-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clock-ten-thirty.svg)
 */
const ClockTenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM280 392l0-136c0-8-4-15.5-10.7-20l-96-64c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3L232 268.8 232 392c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
    </Icon>
);

export default ClockTenThirty;