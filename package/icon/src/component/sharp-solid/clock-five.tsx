
import { Icon } from "../../index";

/**
 * A component that renders the `clock-five` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five?s=sharp-solid clock-five}
 * @preview ![clock-five](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clock-five.svg)
 */
const ClockFive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-392l0 128.7 60 90 13.3 20-39.9 26.6-13.3-20-64-96-4-6 0-7.3 0-136 0-24 48 0 0 24z" />
    </Icon>
);

export default ClockFive;