
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-pin-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin-lock?s=sharp-duotone-solid location-pin-lock}
 * @preview ![location-pin-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-pin-lock.svg)
 */
const LocationPinLock: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192C0 304 192 512 192 512s28.8-31.1 64-75.8L256 288l32 0 0-16c0-55.6 40.5-101.7 93.6-110.5C367 70 287.7 0 192 0C86 0 0 86 0 192zm256 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M368 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default LocationPinLock;