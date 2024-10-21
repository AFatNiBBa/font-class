
import { Icon } from "../../index";

/**
 * A component that renders the `car-battery` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-battery?s=sharp-solid car-battery}
 * @preview ![car-battery](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/car-battery.svg)
 */
const CarBattery: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 64l128 0 0 32 96 0 0-32 128 0 0 32 80 0 0 352L0 448 0 96l80 0 0-32zM384 192l0-16-32 0 0 16 0 32-32 0-16 0 0 32 16 0 32 0 0 32 0 16 32 0 0-16 0-32 32 0 16 0 0-32-16 0-32 0 0-32zM80 224l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
    </Icon>
);

export default CarBattery;