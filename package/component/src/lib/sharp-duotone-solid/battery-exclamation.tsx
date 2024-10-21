
import { Icon, generic } from "../../index";

/**
 * A component that renders the `battery-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-exclamation?s=sharp-duotone-solid battery-exclamation}
 * @preview ![battery-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/battery-exclamation.svg)
 */
const BatteryExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 64L0 352l0 64 64 0 128 0 0-64L64 352l0-192 144 0 0-64L64 96 0 96zm336 0l0 64 144 0 0 192-128 0 0 64 128 0 64 0 0-64 0-32 32 0 0-128-32 0 0-32 0-64-64 0L336 96z" />
        <path d="M296 120l0-24-48 0 0 24 0 176 0 24 48 0 0-24 0-176zm8 232l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default BatteryExclamation;