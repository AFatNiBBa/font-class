
import { Icon } from "../../index";

/**
 * A component that renders the `clock-nine` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-nine?s=sharp-solid clock-nine}
 * @preview ![clock-nine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clock-nine.svg)
 */
const ClockNine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-392l0 136 0 24-24 0-104 0-24 0 0-48 24 0 80 0 0-112 0-24 48 0 0 24z" />
    </Icon>
);

export default ClockNine;