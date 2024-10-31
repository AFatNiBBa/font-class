
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eight` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eight?s=sharp-solid clock-eight}
 * @preview ![clock-eight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clock-eight.svg)
 */
const ClockEight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-392l0 136 0 12.8L269.3 276l-96 64-20 13.3-26.6-39.9 20-13.3L232 243.2 232 120l0-24 48 0 0 24z" />
    </Icon>
);

export default ClockEight;