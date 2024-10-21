
import { Icon } from "../../index";

/**
 * A component that renders the `battery-quarter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-quarter?s=sharp-solid battery-quarter}
 * @preview ![battery-quarter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/battery-quarter.svg)
 */
const BatteryQuarter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 160l0 192L64 352l0-192 416 0zM64 96L0 96l0 64L0 352l0 64 64 0 416 0 64 0 0-64 0-32 32 0 0-128-32 0 0-32 0-64-64 0L64 96zm128 96l-96 0 0 128 96 0 0-128z" />
    </Icon>
);

export default BatteryQuarter;