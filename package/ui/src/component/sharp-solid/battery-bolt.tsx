
import { Icon } from "../../index";

/**
 * A component that renders the `battery-bolt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-bolt?s=sharp-solid battery-bolt}
 * @preview ![battery-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/battery-bolt.svg)
 */
const BatteryBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 352l125.5 0-20 64L64 416 0 416l0-64L0 160 0 96l64 0 243.5 0-84.3 64L64 160l0 192zm172.5 64l84.3-64L480 352l0-192-125.5 0 20-64L480 96l64 0 0 64 0 32 32 0 0 128-32 0 0 32 0 64-64 0-243.5 0zM208 400l40-128-88 0 0-24L336 112 296 240l88 0 0 24L208 400z" />
    </Icon>
);

export default BatteryBolt;