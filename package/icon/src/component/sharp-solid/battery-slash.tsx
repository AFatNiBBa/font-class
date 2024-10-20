
import { Icon } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=sharp-solid battery-slash}
 * @preview ![battery-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/battery-slash.svg)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L565.2 416l10.8 0 0-64 0-32 32 0 0-128-32 0 0-32 0-64-64 0L153 96 48.4 14.8zM235.4 160L512 160l0 192-29.3 0L235.4 160zM406.2 416l-81.2-64L96 352l0-180.4L32 121.2 32 160l0 192 0 64 64 0 310.2 0z" />
    </Icon>
);

export default BatterySlash;