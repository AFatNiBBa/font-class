
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin-slash?s=sharp-thin location-pin-slash}
 * @preview ![location-pin-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/location-pin-slash.svg)
 */
const LocationPinSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 192C512 86 426 0 320 0C266.7 0 218.5 21.7 183.8 56.7l12.6 10C228.2 35.3 271.8 16 320 16c97.2 0 176 78.8 176 176c0 23.9-10.4 54.9-27.9 89.2l12.8 10.1c18.6-36 31.1-70.8 31.1-99.3zm-383.9 4.2c4 96.5 141.3 258.7 181.2 303.8c6.8 7.7 10.7 12 10.7 12s4-4.3 10.7-12c14.6-16.5 42.1-48.6 71.5-87.4l-12.6-9.9c-19.1 25.2-37.4 47.6-51.8 64.7c-7 8.2-13 15.2-17.8 20.6c-4.8-5.4-10.8-12.4-17.8-20.6c-17.8-21-41.6-50.2-65.3-82.8c-23.7-32.6-47.2-68.4-64.7-102.6c-13.5-26.5-22.9-51-26.5-71.8l-17.6-13.9zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default LocationPinSlash;