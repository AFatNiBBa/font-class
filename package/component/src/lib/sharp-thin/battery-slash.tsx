
import { Icon } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=sharp-thin battery-slash}
 * @preview ![battery-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/battery-slash.svg)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zm370 395L48 400l0-267L32 120.4 32 400l0 16 16 0 358.5 0-20.3-16zM544 96L233.5 96l20.3 16L544 112l0 80 0 16 0 96 0 16 0 21.1 16 12.6 0-33.7 32 0 16 0 0-16 0-96 0-16-16 0-32 0 0-80 0-16-16 0zm16 112l32 0 0 96-32 0 0-96z" />
    </Icon>
);

export default BatterySlash;