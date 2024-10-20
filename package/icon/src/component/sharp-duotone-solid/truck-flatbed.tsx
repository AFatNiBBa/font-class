
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-flatbed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-flatbed?s=sharp-duotone-solid truck-flatbed}
 * @preview ![truck-flatbed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-flatbed.svg)
 */
const TruckFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M353.1 416c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l33.1 0 32 0 0-64-32 0 0-64 0-32 0-32 0-13.3-9.4-9.4-96-96L493.3 96 480 96l-64 0-16 0-48 0 0 256-97.6 0c17.1 16.8 28.9 39.1 32.5 64l65.1 0 1.1 0zM97.6 352L0 352l0 64 65.1 0c3.6-24.9 15.3-47.2 32.5-64zM544 256l-128 0 0-96 50.7 0L544 237.3l0 18.7z" />
    </Icon>
);

export default TruckFlatbed;