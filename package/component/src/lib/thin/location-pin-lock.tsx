
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin-lock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin-lock?s=thin location-pin-lock}
 * @preview ![location-pin-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/location-pin-lock.svg)
 */
const LocationPinLock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M203.2 489.2c14-17.5 32.8-41.7 52.8-69.5l0 27.1c-15.3 20.6-29.3 38.6-40.3 52.3c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0c95.7 0 175 70 189.6 161.5c-5.3 .9-10.6 2.1-15.6 3.8C353.1 80.7 280.1 16 192 16C94.8 16 16 94.8 16 192c0 18.7 6.4 42.5 17.8 69.6c11.3 26.9 27.1 55.8 44.7 84.3c35.2 57 76.8 111.4 102.3 143.2c5.9 7.3 16.6 7.3 22.4 0zM192 112a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm64 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm144 16c-26.5 0-48 21.5-48 48l0 64 96 0 0-64c0-26.5-21.5-48-48-48zm-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 16 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l16 0 0-64zm-16 80c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16l-16 0-16 0-96 0-16 0-16 0z" />
    </Icon>
);

export default LocationPinLock;