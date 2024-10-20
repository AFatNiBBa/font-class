
import { Icon } from "../../index";

/**
 * A component that renders the `battery-exclamation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-exclamation?s=sharp-regular battery-exclamation}
 * @preview ![battery-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/battery-exclamation.svg)
 */
const BatteryExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 96L0 96l0 48L0 368l0 48 48 0 160 0 0-48L48 368l0-224 160 0 0-48L48 96zM496 368l-160 0 0 48 160 0 48 0 0-48 0-48 32 0 0-128-32 0 0-48 0-48-48 0L336 96l0 48 160 0 0 224zM296 96l-48 0 0 24 0 192 0 24 48 0 0-24 0-192 0-24zM248 368l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default BatteryExclamation;