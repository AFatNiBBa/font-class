
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-battery` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-battery?s=duotone car-battery}
 * @preview ![car-battery](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-battery.svg)
 */
const CarBattery: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160c0-35.3 28.7-64 64-64l16 0 128 0 96 0 128 0 16 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 160zm80 80c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16zm224 0c0 8.8 7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-32 0c-8.8 0-16 7.2-16 16z" />
        <path d="M80 96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32H80zm224 0c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32H304z" />
    </Icon>
);

export default CarBattery;