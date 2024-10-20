
import { Icon } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=sharp-regular battery-slash}
 * @preview ![battery-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/battery-slash.svg)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L565.2 416l10.8 0 0-48 0-48 32 0 0-128-32 0 0-48 0-48-48 0L153 96 48.4 14.8zM214.8 144L528 144l0 224-24.7 0L214.8 144zM406.2 416l-60.9-48L80 368l0-209L32 121.2 32 144l0 224 0 48 48 0 326.2 0z" />
    </Icon>
);

export default BatterySlash;