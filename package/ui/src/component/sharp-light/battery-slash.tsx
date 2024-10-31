
import { Icon } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=sharp-light battery-slash}
 * @preview ![battery-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/battery-slash.svg)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18zM378.8 384L64 384l0-248.6L32 110.2 32 128l0 256 0 32 32 0 355.4 0-40.5-32zM512 96L220.6 96l40.5 32L512 128l0 198 32 25.3L544 128l0-32-32 0zm64 96l0 32 0 64 0 32 32 0 0-32 0-64 0-32-32 0z" />
    </Icon>
);

export default BatterySlash;