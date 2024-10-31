
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eleven` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven?s=sharp-solid clock-eleven}
 * @preview ![clock-eleven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clock-eleven.svg)
 */
const ClockEleven: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 56.7-20-30-13.3-20-39.9 26.6 13.3 20 64 96L280 256l0-136 0-24-48 0 0 24z" />
    </Icon>
);

export default ClockEleven;