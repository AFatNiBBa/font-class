
import { Icon } from "../../index";

/**
 * A component that renders the `car-battery` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-battery?s=sharp-light car-battery}
 * @preview ![car-battery](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/car-battery.svg)
 */
const CarBattery: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l128 0 0 32L64 96l0-32zm256 0l128 0 0 32L320 96l0-32zM32 160l0 256 448 0 0-256L32 160zM0 128l32 0 448 0 32 0 0 32 0 256 0 32-32 0L32 448 0 448l0-32L0 160l0-32zm384 80l0 16 0 32 32 0 16 0 0 32-16 0-32 0 0 32 0 16-32 0 0-16 0-32-32 0-16 0 0-32 16 0 32 0 0-32 0-16 32 0zM96 256l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0z" />
    </Icon>
);

export default CarBattery;