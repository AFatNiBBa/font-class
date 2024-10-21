
import { Icon } from "../../index";

/**
 * A component that renders the `clock-seven-thirty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-seven-thirty?s=sharp-regular clock-seven-thirty}
 * @preview ![clock-seven-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clock-seven-thirty.svg)
 */
const ClockSevenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 0 416 0A208 208 0 1 0 48 256zm464 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM232 392l0-56.7-20 30-13.3 20-39.9-26.6 13.3-20 64-96L280 256l0 136 0 24-48 0 0-24z" />
    </Icon>
);

export default ClockSevenThirty;