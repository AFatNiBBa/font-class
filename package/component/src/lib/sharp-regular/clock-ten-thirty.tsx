
import { Icon } from "../../index";

/**
 * A component that renders the `clock-ten-thirty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten-thirty?s=sharp-regular clock-ten-thirty}
 * @preview ![clock-ten-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clock-ten-thirty.svg)
 */
const ClockTenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM280 392l0-136 0-12.8L269.3 236l-96-64-20-13.3-26.6 39.9 20 13.3L232 268.8 232 392l0 24 48 0 0-24z" />
    </Icon>
);

export default ClockTenThirty;