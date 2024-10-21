
import { Icon } from "../../index";

/**
 * A component that renders the `map-location-dot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location-dot?s=sharp-light map-location-dot}
 * @preview ![map-location-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/map-location-dot.svg)
 */
const MapLocationDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M360.8 166.2C371.4 145.4 376 129.7 376 120c0-48.6-39.4-88-88-88s-88 39.4-88 88c0 9.7 4.6 25.4 15.2 46.2c10.2 20 24.1 41.3 38.6 61.2c12 16.5 24.1 31.7 34.1 43.7c10-12 22.1-27.2 34.1-43.7c14.5-19.9 28.4-41.2 38.6-61.2zM309.2 295.7C296.6 310.7 288 320 288 320s-8.6-9.3-21.2-24.3C232.4 254.7 168 171.3 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120c0 51.3-64.4 134.7-98.8 175.7zm92-70.1l-.5-.2c6.1-9.9 12-20 17.1-30.1c2-3.9 3.9-7.8 5.8-11.9L544 139.6 576 128l0 34 0 286L400 512 176 448 32 500.4 0 512l0-34.1L0 192l138.3-50.3c2.1 10.3 5.4 20.6 9.4 30.6L32 214.4l0 251.9 128-46.5L160 288l32 0 0 131.3 192 54.9L384 288l32 0 0 184.1 128-46.5 0-251.9L410.9 222.1l-9.8 3.5zM288 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default MapLocationDot;