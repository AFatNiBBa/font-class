
import { Icon } from "../../index";

/**
 * A component that renders the `location-check` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-check?s=solid location-check}
 * @preview ![location-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/location-check.svg)
 */
const LocationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM289 155.6L182.3 262.3c-9.4 9.4-24.6 9.4-33.9 0L95 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36.4 36.4L255 121.7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </Icon>
);

export default LocationCheck;