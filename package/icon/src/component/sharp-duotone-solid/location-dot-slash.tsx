
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-dot-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-dot-slash?s=sharp-duotone-solid location-dot-slash}
 * @preview ![location-dot-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-dot-slash.svg)
 */
const LocationDotSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128.1 196.9C133.5 310 320 512 320 512s39.1-42.4 82.1-99.2L128.1 196.9zM153.5 96.4l90.6 70.3C254.7 134.9 284.7 112 320 112c44.2 0 80 35.8 80 80c0 28.2-14.6 53-36.7 67.3l94.2 73.2C488.3 282.6 512 231.4 512 192C512 86 426 0 320 0C248.8 0 186.6 38.8 153.5 96.4z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default LocationDotSlash;