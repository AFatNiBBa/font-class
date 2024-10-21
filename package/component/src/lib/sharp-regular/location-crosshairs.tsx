
import { Icon } from "../../index";

/**
 * A component that renders the `location-crosshairs` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-crosshairs?s=sharp-regular location-crosshairs}
 * @preview ![location-crosshairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/location-crosshairs.svg)
 */
const LocationCrosshairs: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 0l0 24 0 41.5C366.8 76.3 435.7 145.2 446.5 232l41.5 0 24 0 0 48-24 0-41.5 0C435.7 366.8 366.8 435.7 280 446.5l0 41.5 0 24-48 0 0-24 0-41.5C145.2 435.7 76.3 366.8 65.5 280L24 280 0 280l0-48 24 0 41.5 0C76.3 145.2 145.2 76.3 232 65.5L232 24l0-24 48 0zM112 256a144 144 0 1 0 288 0 144 144 0 1 0 -288 0zm192 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-144 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default LocationCrosshairs;