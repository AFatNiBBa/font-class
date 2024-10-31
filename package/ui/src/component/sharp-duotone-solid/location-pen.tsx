
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pen?s=sharp-duotone-solid location-pen}
 * @preview ![location-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-pen.svg)
 */
const LocationPen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192C0 304 192 512 192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192zm96 96.1l7.9-55.3c28.4-28.4 56.8-56.8 85.2-85.2c15.8 15.8 31.6 31.6 47.3 47.3c-28.4 28.4-56.8 56.8-85.2 85.2c-18.4 2.6-36.8 5.3-55.3 7.9zM211.7 125.1c9.7-9.7 19.4-19.4 29.1-29.1l47.3 47.3L259 172.4l-47.3-47.3z" />
        <path d="M288.1 143.4L240.8 96l-29.1 29.1L259 172.4l29.1-29.1zM236.4 195l-47.3-47.3-85.2 85.2L96 288.1l55.3-7.9L236.4 195z" />
    </Icon>
);

export default LocationPen;