
import { Icon, generic } from "../../index";

/**
 * A component that renders the `caravan` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan?s=sharp-duotone-solid caravan}
 * @preview ![caravan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/caravan.svg)
 */
const Caravan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 128l0 128 192 0 0-128L64 128zm48 304a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zM320 128l0 176 32 48 96 0 0-96-32 0-16 0 0-32 16 0 32 0 0-96-128 0z" />
        <path d="M416 32L0 32 0 416l81.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96L576 416l32 0 32 0 0-64-32 0-32 0 0-160c0-88.4-71.6-160-160-160zm32 320l-96 0-32-48 0-176 128 0 0 224zM64 128l192 0 0 128L64 256l0-128z" />
    </Icon>
);

export default Caravan;