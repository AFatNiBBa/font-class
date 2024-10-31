
import { Icon } from "../../index";

/**
 * A component that renders the `clock-one` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-one?s=sharp-regular clock-one}
 * @preview ![clock-one](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clock-one.svg)
 */
const ClockOne: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM280 120l0 56.7 20-30 13.3-20 39.9 26.6-13.3 20-64 96L232 256l0-136 0-24 48 0 0 24z" />
    </Icon>
);

export default ClockOne;