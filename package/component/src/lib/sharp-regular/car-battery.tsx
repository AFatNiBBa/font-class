
import { Icon } from "../../index";

/**
 * A component that renders the `car-battery` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-battery?s=sharp-regular car-battery}
 * @preview ![car-battery](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/car-battery.svg)
 */
const CarBattery: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 64l128 0 0 32 96 0 0-32 128 0 0 32 32 0 48 0 0 48 0 256 0 48-48 0L48 448 0 448l0-48L0 144 0 96l48 0 32 0 0-32zM48 144l0 256 416 0 0-256L48 144zm336 32l0 16 0 32 32 0 16 0 0 32-16 0-32 0 0 32 0 16-32 0 0-16 0-32-32 0-16 0 0-32 16 0 32 0 0-32 0-16 32 0zM96 224l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0z" />
    </Icon>
);

export default CarBattery;