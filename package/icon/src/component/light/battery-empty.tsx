
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=light battery-empty}
 * @preview ![battery-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/battery-empty.svg)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 128c-26.5 0-48 21.5-48 48l0 160c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L80 128zM0 176c0-44.2 35.8-80 80-80l352 0c44.2 0 80 35.8 80 80l0 160c0 44.2-35.8 80-80 80L80 416c-44.2 0-80-35.8-80-80L0 176zm560 16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default BatteryEmpty;