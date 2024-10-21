
import { Icon, generic } from "../../index";

/**
 * A component that renders the `battery-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-bolt?s=sharp-duotone-solid battery-bolt}
 * @preview ![battery-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/battery-bolt.svg)
 */
const BatteryBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 64L0 352l0 64 64 0 105.5 0 20-64L64 352l0-192 159.2 0 84.3-64L64 96 0 96zM236.5 416L480 416l64 0 0-64 0-32 32 0 0-128-32 0 0-32 0-64-64 0L374.5 96l-20 64L480 160l0 192-159.2 0-84.3 64z" />
        <path d="M384 264L208 400l40-128H160V248L336 112 296 240h88v24z" />
    </Icon>
);

export default BatteryBolt;