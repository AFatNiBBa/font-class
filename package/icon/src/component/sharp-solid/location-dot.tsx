
import { Icon } from "../../index";

/**
 * A component that renders the `location-dot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-dot?s=sharp-solid location-dot}
 * @preview ![location-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/location-dot.svg)
 */
const LocationDot: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192C0 304 192 512 192 512zm0-384a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default LocationDot;