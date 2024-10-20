
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=sharp-light battery-empty}
 * @preview ![battery-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/battery-empty.svg)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 128l0 256 448 0 0-256L32 128zM0 96l32 0 448 0 32 0 0 32 0 256 0 32-32 0L32 416 0 416l0-32L0 128 0 96zm544 96l32 0 0 32 0 64 0 32-32 0 0-32 0-64 0-32z" />
    </Icon>
);

export default BatteryEmpty;