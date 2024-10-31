
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-fast` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-fast?s=sharp-duotone-solid truck-fast}
 * @preview ![truck-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-fast.svg)
 */
const TruckFast: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 32 64 0 224 0 0-32L64 96 0 96zM0 224l0 32 64 0 160 0 0-32L64 224 0 224zm32-64l0 32 32 0 192 0 0-32L64 160l-32 0zM96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M64 0L416 0l0 96 64 0 13.3 0 9.4 9.4 96 96 9.4 9.4 0 13.3 0 32 0 32 0 64 32 0 0 64-32 0-32 0-1.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l-66.3 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96L64 416l0-160 160 0 0-32L64 224l0-32 192 0 0-32L64 160l0-32 224 0 0-32L64 96 64 0zM416 256l128 0 0-18.7L466.7 160 416 160l0 96z" />
    </Icon>
);

export default TruckFast;