
import { Icon } from "../../index";

/**
 * A component that renders the `battery-bolt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-bolt?s=sharp-regular battery-bolt}
 * @preview ![battery-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/battery-bolt.svg)
 */
const BatteryBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 368l136.5 0-15 48L48 416 0 416l0-48L0 144 0 96l48 0 259.5 0-63.2 48L48 144l0 224zm188.5 48l63.2-48L496 368l0-224-136.5 0 15-48L496 96l48 0 0 48 0 48 32 0 0 128-32 0 0 48 0 48-48 0-259.5 0zM208 400l40-128-88 0 0-24L336 112 296 240l88 0 0 24L208 400z" />
    </Icon>
);

export default BatteryBolt;