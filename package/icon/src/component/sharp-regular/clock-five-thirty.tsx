
import { Icon } from "../../index";

/**
 * A component that renders the `clock-five-thirty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five-thirty?s=sharp-regular clock-five-thirty}
 * @preview ![clock-five-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clock-five-thirty.svg)
 */
const ClockFiveThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM280 392l0-56.7 20 30 13.3 20 39.9-26.6-13.3-20-64-96L232 256l0 136 0 24 48 0 0-24z" />
    </Icon>
);

export default ClockFiveThirty;