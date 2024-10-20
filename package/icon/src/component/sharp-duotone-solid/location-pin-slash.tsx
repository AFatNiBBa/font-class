
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-pin-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin-slash?s=sharp-duotone-solid location-pin-slash}
 * @preview ![location-pin-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-pin-slash.svg)
 */
const LocationPinSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128.1 196.9C133.5 310 320 512 320 512s39.1-42.4 82.1-99.2L128.1 196.9zM154 95.4L341.5 242.4l116 90.1C488.3 282.6 512 231.4 512 192C512 86 426 0 320 0C249.2 0 187.3 38.4 154 95.4z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default LocationPinSlash;