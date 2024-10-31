
import { Icon } from "../../index";

/**
 * A component that renders the `location-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-xmark?s=sharp-solid location-xmark}
 * @preview ![location-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/location-xmark.svg)
 */
const LocationXmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192C0 304 192 512 192 512zm97.9-384l-17 17-47 47 47 47 17 17L256 289.9l-17-17-47-47-47 47-17 17L94.1 256l17-17 47-47-47-47-17-17L128 94.1l17 17 47 47 47-47 17-17L289.9 128z" />
    </Icon>
);

export default LocationXmark;