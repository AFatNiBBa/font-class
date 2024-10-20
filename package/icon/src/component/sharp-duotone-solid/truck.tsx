
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck?s=sharp-duotone-solid truck}
 * @preview ![truck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck.svg)
 */
const Truck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M416 0L0 0 0 416l65.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l66.3 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l1.1 0 32 0 32 0 0-64-32 0 0-64 0-32 0-32 0-13.3-9.4-9.4-96-96L493.3 96 480 96l-64 0 0-96zm0 160l50.7 0L544 237.3l0 18.7-128 0 0-96z" />
    </Icon>
);

export default Truck;