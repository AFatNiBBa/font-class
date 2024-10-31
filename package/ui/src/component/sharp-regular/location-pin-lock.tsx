
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin-lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin-lock?s=sharp-regular location-pin-lock}
 * @preview ![location-pin-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/location-pin-lock.svg)
 */
const LocationPinLock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M249.2 365.8c2.3-3.1 4.6-6.3 6.8-9.5l0 79.9c-11.7 14.9-22.7 28.2-32.2 39.4C204.8 498.1 192 512 192 512s-12.8-13.9-31.8-36.4C105.6 411 0 275.1 0 192C0 86 86 0 192 0c95.7 0 175 70 189.6 161.5c-16.9 2.8-32.6 9.4-46.1 18.9C329.6 106.3 267.6 48 192 48C112.5 48 48 112.5 48 192c0 16.3 7.7 42 24.7 75.4c16.4 32.2 38.8 66.4 62.1 98.3c20.3 27.9 40.7 53.3 57.2 73.1c16.5-19.8 36.9-45.2 57.2-73.1zM224 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-112 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm288 48c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default LocationPinLock;