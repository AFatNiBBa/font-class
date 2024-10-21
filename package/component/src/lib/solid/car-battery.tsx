
import { Icon } from "../../index";

/**
 * A component that renders the `car-battery` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-battery?s=solid car-battery}
 * @preview ![car-battery](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/car-battery.svg)
 */
const CarBattery: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 96c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l96 0c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l16 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l16 0zm304 96c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-32zM80 240c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default CarBattery;