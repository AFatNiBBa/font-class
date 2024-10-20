
import { Icon } from "../../index";

/**
 * A component that renders the `location-crosshairs` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-crosshairs?s=thin location-crosshairs}
 * @preview ![location-crosshairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/location-crosshairs.svg)
 */
const LocationCrosshairs: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c4.4 0 8 3.6 8 8l0 56.2c99.7 4.1 179.8 84.2 183.8 183.8l56.2 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56.2 0c-4.1 99.7-84.2 179.8-183.8 183.8l0 56.2c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-56.2C148.3 443.8 68.2 363.7 64.2 264L8 264c-4.4 0-8-3.6-8-8s3.6-8 8-8l56.2 0C68.2 148.3 148.3 68.2 248 64.2L248 8c0-4.4 3.6-8 8-8zM80 256a176 176 0 1 0 352 0A176 176 0 1 0 80 256zm256 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-176 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default LocationCrosshairs;