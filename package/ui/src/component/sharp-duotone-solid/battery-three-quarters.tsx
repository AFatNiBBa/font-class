
import { Icon, generic } from "../../index";

/**
 * A component that renders the `battery-three-quarters` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-three-quarters?s=sharp-duotone-solid battery-three-quarters}
 * @preview ![battery-three-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/battery-three-quarters.svg)
 */
const BatteryThreeQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l64 0 416 0 64 0 0 64 0 32 32 0 0 128-32 0 0 32 0 64-64 0L64 416 0 416l0-64L0 160 0 96zm64 64l0 192 416 0 0-192L64 160z" />
        <path d="M96 192h256v128H96V192z" />
    </Icon>
);

export default BatteryThreeQuarters;