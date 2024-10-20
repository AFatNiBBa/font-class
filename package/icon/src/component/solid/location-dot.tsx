
import { Icon } from "../../index";

/**
 * A component that renders the `location-dot` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-dot?s=solid location-dot}
 * @preview ![location-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/location-dot.svg)
 */
const LocationDot: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default LocationDot;