
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=sharp-regular battery-empty}
 * @preview ![battery-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/battery-empty.svg)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 144l0 224 448 0 0-224L48 144zM0 96l48 0 448 0 48 0 0 48 0 48 32 0 0 128-32 0 0 48 0 48-48 0L48 416 0 416l0-48L0 144 0 96z" />
    </Icon>
);

export default BatteryEmpty;