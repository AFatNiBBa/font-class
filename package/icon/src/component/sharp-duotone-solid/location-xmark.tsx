
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-xmark?s=sharp-duotone-solid location-xmark}
 * @preview ![location-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-xmark.svg)
 */
const LocationXmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192C0 304 192 512 192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192zm94.1-64c11.3-11.3 22.6-22.6 33.9-33.9c5.7 5.7 11.3 11.3 17 17c15.7 15.7 31.3 31.3 47 47c15.7-15.7 31.3-31.3 47-47c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17c-15.7 15.7-31.3 31.3-47 47c15.7 15.7 31.4 31.4 47 47c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9l-17-17-47-47c-15.7 15.7-31.3 31.4-47 47l-17 17c-11.3-11.3-22.6-22.6-33.9-33.9c5.7-5.7 11.3-11.3 17-17c15.7-15.7 31.4-31.4 47-47c-15.7-15.7-31.3-31.3-47-47c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M273 145l17-17L256 94.1l-17 17-47 47-47-47-17-17L94.1 128l17 17 47 47-47 47-17 17L128 289.9l17-17 47-47 47 47 17 17L289.9 256l-17-17-47-47 47-47z" />
    </Icon>
);

export default LocationXmark;