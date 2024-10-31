
import { Icon } from "../../index";

/**
 * A component that renders the `location-smile` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-smile?s=sharp-solid location-smile}
 * @preview ![location-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/location-smile.svg)
 */
const LocationSmile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192C0 304 192 512 192 512zM128 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM95.4 267.1l33.3-22.2c6.2 9.4 29.1 31.1 63.4 31.1s57.1-21.7 63.4-31.1l33.3 22.2C277.1 284.4 243.1 316 192 316s-85.1-31.6-96.6-48.9z" />
    </Icon>
);

export default LocationSmile;