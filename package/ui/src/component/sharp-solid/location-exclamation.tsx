
import { Icon } from "../../index";

/**
 * A component that renders the `location-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-exclamation?s=sharp-solid location-exclamation}
 * @preview ![location-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/location-exclamation.svg)
 */
const LocationExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192C0 304 192 512 192 512zM216 96l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM168 336l0-48 48 0 0 48-48 0z" />
    </Icon>
);

export default LocationExclamation;