
import { Icon } from "../../index";

/**
 * A component that renders the `clock-two` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two?s=sharp-solid clock-two}
 * @preview ![clock-two](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clock-two.svg)
 */
const ClockTwo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-392l0 91.2L338.7 172l20-13.3 26.6 39.9-20 13.3-96 64L232 300.8l0-44.8 0-136 0-24 48 0 0 24z" />
    </Icon>
);

export default ClockTwo;