
import { Icon, generic } from "../../index";

/**
 * A component that renders the `map-location-dot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location-dot?s=sharp-duotone-solid map-location-dot}
 * @preview ![map-location-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/map-location-dot.svg)
 */
const MapLocationDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192l133-53.2c5.5 19.4 15.1 40.6 27 62.1L160 448 0 512 0 192zm192 60.3c44.5 65.3 96 121 96 121s51.4-55.7 96-121L384 512 192 448l0-195.7zm224-51.5c2.1-3.8 4.1-7.5 6-11.3L576 128l0 320L416 512l0-311.1z" />
        <path d="M288 320s120-130 120-200C408 53.7 354.3 0 288 0S168 53.7 168 120c0 70 120 200 120 200zm0-248a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
    </Icon>
);

export default MapLocationDot;