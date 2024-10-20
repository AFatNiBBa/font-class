
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-bolt?s=sharp-duotone-solid car-bolt}
 * @preview ![car-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-bolt.svg)
 */
const CarBolt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 400l0 80 96 0 0-80L0 400zm416 0l0 80 96 0 0-80-96 0z" />
        <path d="M120 32L97.3 32 89.8 53.4 41.3 192 0 192 0 400l512 0 0-208-41.3 0L422.2 53.4 414.7 32 392 32 120 32zM64 288a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM160 224L288 96l-24 96 88 0L224 320l24-96-88 0z" />
    </Icon>
);

export default CarBolt;