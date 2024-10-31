
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-flatbed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-flatbed?s=duotone truck-flatbed}
 * @preview ![truck-flatbed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-flatbed.svg)
 */
const TruckFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M640 384c0 17.7-14.3 32-32 32l-33.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l-1.1 0-65.1 0c-3.6-24.9-15.3-47.2-32.5-64l97.6 0 0-224c0-17.7 14.3-32 32-32l16 0 16 0 50.7 0c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3l0 18.7 0 32 0 64c17.7 0 32 14.3 32 32zM97.6 352c-17.1 16.8-28.9 39.1-32.5 64L32 416c-17.7 0-32-14.3-32-32s14.3-32 32-32l65.6 0zM544 256l0-18.7L466.7 160 416 160l0 96 128 0z" />
    </Icon>
);

export default TruckFlatbed;