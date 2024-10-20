
import { Icon } from "../../index";

/**
 * A component that renders the `battery-quarter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-quarter?s=sharp-regular battery-quarter}
 * @preview ![battery-quarter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/battery-quarter.svg)
 */
const BatteryQuarter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M496 144l0 224L48 368l0-224 448 0zM48 96L0 96l0 48L0 368l0 48 48 0 448 0 48 0 0-48 0-48 32 0 0-128-32 0 0-48 0-48-48 0L48 96zm144 96l-96 0 0 128 96 0 0-128z" />
    </Icon>
);

export default BatteryQuarter;