
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=sharp-solid location-arrow}
 * @preview ![location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/location-arrow.svg)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 256H224V480h48L432 48 0 208v48z" />
    </Icon>
);

export default LocationArrow;