
import { Icon } from "../../index";

/**
 * A component that renders the `battery-half` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-half?s=sharp-light battery-half}
 * @preview ![battery-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/battery-half.svg)
 */
const BatteryHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 128l0 256L32 384l0-256 448 0zM32 96L0 96l0 32L0 384l0 32 32 0 448 0 32 0 0-32 0-256 0-32-32 0L32 96zm544 96l-32 0 0 32 0 64 0 32 32 0 0-32 0-64 0-32zM96 192l160 0 0 128L96 320l0-128zM64 160l0 32 0 128 0 32 32 0 160 0 32 0 0-32 0-128 0-32-32 0L96 160l-32 0z" />
    </Icon>
);

export default BatteryHalf;