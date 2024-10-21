
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=regular battery-empty}
 * @preview ![battery-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/battery-empty.svg)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 144c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L80 144zM0 176c0-44.2 35.8-80 80-80l384 0c44.2 0 80 35.8 80 80l0 16c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 16c0 44.2-35.8 80-80 80L80 416c-44.2 0-80-35.8-80-80L0 176z" />
    </Icon>
);

export default BatteryEmpty;