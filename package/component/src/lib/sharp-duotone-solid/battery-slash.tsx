
import { Icon, generic } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=sharp-duotone-solid battery-slash}
 * @preview ![battery-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/battery-slash.svg)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L32 160l0 192 0 64 64 0 310.2 0-81.2-64L96 352l0-180.4L32 121.2zM153 96c27.5 21.3 55 42.7 82.4 64L512 160l0 192-29.3 0c27.5 21.3 55 42.7 82.4 64l10.8 0 0-64 0-32 32 0 0-128-32 0 0-32 0-64-64 0L153 96z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default BatterySlash;