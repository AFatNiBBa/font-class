
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-building` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-building?s=sharp-duotone-solid car-building}
 * @preview ![car-building](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-building.svg)
 */
const CarBuilding: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L352 0l0 128-32 0-23.1 0-23.1 0-7.3 21.9-7.3 21.9L252.5 192 192 192l0 64 0 32 0 160 0 32L0 480 0 0zM64 96l0 64 64 0 0-64L64 96zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zM192 96l0 64 64 0 0-64-64 0z" />
        <path d="M320 160l-23.1 0-7.3 21.9L254.3 288 224 288l0 160s0 0 0 0l0 64 80 0 0-64 256 0 0 64 80 0 0-64s0 0 0 0l0-160-30.3 0L574.4 181.9 567.1 160 544 160l-224 0zM542.3 288l-220.5 0 21.3-64 177.9 0 21.3 64zM280 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm280-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default CarBuilding;