
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin-slash?s=sharp-solid location-pin-slash}
 * @preview ![location-pin-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/location-pin-slash.svg)
 */
const LocationPinSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M153.5 96.4L48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L457.5 332.4C488.3 282.6 512 231.4 512 192C512 86 426 0 320 0C248.8 0 186.6 38.8 153.5 96.4zM320 512s39.1-42.4 82.1-99.2L128.1 196.9C133.5 310 320 512 320 512z" />
    </Icon>
);

export default LocationPinSlash;