
import { Icon } from "../../index";

/**
 * A component that renders the `location-crosshairs` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-crosshairs?s=sharp-light location-crosshairs}
 * @preview ![location-crosshairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/location-crosshairs.svg)
 */
const LocationCrosshairs: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 0l0 16 0 48.7c93.3 7.7 167.6 82.1 175.3 175.3l48.7 0 16 0 0 32-16 0-48.7 0c-7.7 93.3-82.1 167.6-175.3 175.3l0 48.7 0 16-32 0 0-16 0-48.7C146.7 439.6 72.4 365.3 64.7 272L16 272 0 272l0-32 16 0 48.7 0C72.4 146.7 146.7 72.4 240 64.7L240 16l0-16 32 0zM96 256a160 160 0 1 0 320 0A160 160 0 1 0 96 256zm224 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default LocationCrosshairs;