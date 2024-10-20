
import { Icon, generic } from "../../index";

/**
 * A component that renders the `caravan-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan-simple?s=sharp-duotone-solid caravan-simple}
 * @preview ![caravan-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/caravan-simple.svg)
 */
const CaravanSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 128l0 128 192 0 0-128L64 128zm48 304a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zM320 128l0 128 128 0 0-128-128 0z" />
        <path d="M416 32L0 32 0 416l81.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96L576 416l32 0 32 0 0-64-32 0-32 0 0-160c0-88.4-71.6-160-160-160zM64 128l192 0 0 128L64 256l0-128zm384 0l0 128-128 0 0-128 128 0z" />
    </Icon>
);

export default CaravanSimple;