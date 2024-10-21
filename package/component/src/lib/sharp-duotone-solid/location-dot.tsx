
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-dot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-dot?s=sharp-duotone-solid location-dot}
 * @preview ![location-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-dot.svg)
 */
const LocationDot: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192C0 304 192 512 192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192zm272 0a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
        <path d="M192 144a48 48 0 1 0 0 96 48 48 0 1 0 0-96z" />
    </Icon>
);

export default LocationDot;