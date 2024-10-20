
import { Icon } from "../../index";

/**
 * A component that renders the `battery-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-exclamation?s=sharp-solid battery-exclamation}
 * @preview ![battery-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/battery-exclamation.svg)
 */
const BatteryExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M208 96l0 64L64 160l0 192 128 0 0 64L64 416 0 416l0-64L0 160 0 96l64 0 144 0zm128 64l0-64 144 0 64 0 0 64 0 32 32 0 0 128-32 0 0 32 0 64-64 0-128 0 0-64 128 0 0-192-144 0zM296 96l0 24 0 176 0 24-48 0 0-24 0-176 0-24 48 0zm8 256l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default BatteryExclamation;