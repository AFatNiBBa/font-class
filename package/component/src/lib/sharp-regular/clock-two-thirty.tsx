
import { Icon } from "../../index";

/**
 * A component that renders the `clock-two-thirty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two-thirty?s=sharp-regular clock-two-thirty}
 * @preview ![clock-two-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clock-two-thirty.svg)
 */
const ClockTwoThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 0 416 0A208 208 0 1 0 48 256zm464 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM232 392l0-136 0-12.8 10.7-7.1 96-64 20-13.3 26.6 39.9-20 13.3L280 268.8 280 392l0 24-48 0 0-24z" />
    </Icon>
);

export default ClockTwoThirty;