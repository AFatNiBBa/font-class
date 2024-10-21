
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=sharp-duotone-solid location-arrow}
 * @preview ![location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-arrow.svg)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 256H224V480h48L432 48 0 208v48z" />
    </Icon>
);

export default LocationArrow;