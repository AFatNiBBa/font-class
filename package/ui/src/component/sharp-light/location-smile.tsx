
import { Icon } from "../../index";

/**
 * A component that renders the `location-smile` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-smile?s=sharp-light location-smile}
 * @preview ![location-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/location-smile.svg)
 */
const LocationSmile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 20.2 9.1 48.6 26.5 82.7c16.9 33.2 39.9 68.2 63.4 100.5c23.4 32.2 46.9 61 64.5 81.9c1.9 2.3 3.8 4.5 5.6 6.6c1.8-2.1 3.6-4.3 5.6-6.6c17.7-20.8 41.1-49.7 64.5-81.9c23.5-32.3 46.4-67.3 63.4-100.5C342.9 240.6 352 212.2 352 192zm32 0c0 88.8-120.7 237.9-170.7 295.9C200.2 503.1 192 512 192 512s-8.2-8.9-21.3-24.1C120.7 429.9 0 280.8 0 192C0 86 86 0 192 0S384 86 384 192zM128 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm104 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM98.7 264.9l26.6-17.8C132.1 257.3 156 280 192 280s59.9-22.7 66.7-32.9l26.6 17.8c-11 16.5-43.9 47.1-93.3 47.1s-82.3-30.6-93.3-47.1z" />
    </Icon>
);

export default LocationSmile;