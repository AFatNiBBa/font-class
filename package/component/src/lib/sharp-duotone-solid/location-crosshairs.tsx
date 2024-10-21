
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-crosshairs` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-crosshairs?s=sharp-duotone-solid location-crosshairs}
 * @preview ![location-crosshairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-crosshairs.svg)
 */
const LocationCrosshairs: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M176 256a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M288 0l0 32 0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0 32 0 0 64-32 0-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7 0 32-64 0 0-32 0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288 0 288l0-64 32 0 34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32l0-32 64 0zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0z" />
    </Icon>
);

export default LocationCrosshairs;