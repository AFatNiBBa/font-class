
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-minus?s=sharp-duotone-solid location-minus}
 * @preview ![location-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-minus.svg)
 */
const LocationMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192C0 304 192 512 192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192zm96-24l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
        <path d="M96 168l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
    </Icon>
);

export default LocationMinus;