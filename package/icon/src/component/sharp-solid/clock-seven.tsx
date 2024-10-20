
import { Icon } from "../../index";

/**
 * A component that renders the `clock-seven` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-seven?s=sharp-solid clock-seven}
 * @preview ![clock-seven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clock-seven.svg)
 */
const ClockSeven: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 128.7-60 90-13.3 20 39.9 26.6 13.3-20 64-96 4-6 0-7.3 0-136 0-24-48 0 0 24z" />
    </Icon>
);

export default ClockSeven;