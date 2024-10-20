
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-pin-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin-slash?s=duotone location-pin-slash}
 * @preview ![location-pin-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/location-pin-slash.svg)
 */
const LocationPinSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128.1 196.9L406.2 416.1c-23.6 33.5-46.3 62.9-62.5 83.1c-6.1 7.7-14.9 11.5-23.7 11.5s-17.6-3.8-23.7-11.5c-50.4-62.9-164-214-168.2-302.2zM154 95.4C187.3 38.3 249.2 0 320 0C426 0 512 86 512 192c0 38.7-23 90.8-53 142.5c-101.7-79.7-203.3-159.4-305-239z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default LocationPinSlash;