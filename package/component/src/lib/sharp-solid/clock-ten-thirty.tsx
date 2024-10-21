
import { Icon } from "../../index";

/**
 * A component that renders the `clock-ten-thirty` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten-thirty?s=sharp-solid clock-ten-thirty}
 * @preview ![clock-ten-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clock-ten-thirty.svg)
 */
const ClockTenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm24-120l0-136 0-12.8L269.3 236l-96-64-20-13.3-26.6 39.9 20 13.3L232 268.8 232 392l0 24 48 0 0-24z" />
    </Icon>
);

export default ClockTenThirty;