
import { Icon } from "../../index";

/**
 * A component that renders the `map-location-dot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location-dot?s=sharp-thin map-location-dot}
 * @preview ![map-location-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/map-location-dot.svg)
 */
const MapLocationDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M375 173.5c10.9-21.4 17-39.9 17-53.5c0-57.4-46.6-104-104-104s-104 46.6-104 104c0 13.6 6.1 32.1 17 53.5c10.7 21 25.2 43.1 39.9 63.3c14.7 20.2 29.4 38.3 40.5 51.4c2.4 2.8 4.6 5.3 6.5 7.6c2-2.3 4.2-4.8 6.5-7.6c11.1-13.1 25.8-31.2 40.5-51.4c14.7-20.3 29.2-42.3 39.9-63.3zM298.7 308c-6.6 7.6-10.7 12-10.7 12s-4.1-4.4-10.7-12C247.9 274.2 168 177.1 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120c0 57.1-79.9 154.2-109.3 188zM560 150.5L414.8 201c1-1.9 2-3.8 3-5.7c2.4-4.8 4.8-9.7 7.1-14.7l135.2-47 16-5.6 0 16.9L576 448 392 512 184 448 16 506.4 0 512l0-16.9L0 192l138.7-48.2c1.1 5.2 2.5 10.3 4.2 15.5L16 203.4l0 286.1 160-55.7L176 288l16 0 0 145.7 192 59.1L384 288l16 0 0 204.3 160-55.7 0-286.1zM320 112a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-80 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default MapLocationDot;