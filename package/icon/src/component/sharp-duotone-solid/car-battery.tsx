
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-battery` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-battery?s=sharp-duotone-solid car-battery}
 * @preview ![car-battery](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-battery.svg)
 */
const CarBattery: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l80 0 128 0 96 0 128 0 80 0 0 352L0 448 0 96zM80 224l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zm224 0l0 32 16 0 32 0 0 32 0 16 32 0 0-16 0-32 32 0 16 0 0-32-16 0-32 0 0-32 0-16-32 0 0 16 0 32-32 0-16 0z" />
        <path d="M80 64H208V96H80V64zm224 0H432V96H304V64z" />
    </Icon>
);

export default CarBattery;