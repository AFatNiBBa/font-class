
import { Icon } from "../../index";

/**
 * A component that renders the `clock-five-thirty` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five-thirty?s=sharp-solid clock-five-thirty}
 * @preview ![clock-five-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clock-five-thirty.svg)
 */
const ClockFiveThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm24-120l0-56.7 20 30 13.3 20 39.9-26.6-13.3-20-64-96L232 256l0 136 0 24 48 0 0-24z" />
    </Icon>
);

export default ClockFiveThirty;