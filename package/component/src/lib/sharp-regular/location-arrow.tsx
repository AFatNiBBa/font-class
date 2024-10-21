
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=sharp-regular location-arrow}
 * @preview ![location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/location-arrow.svg)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M272 208l0 48 0 85.8 78.7-212.5L138.2 208l85.8 0 48 0zM0 208L372.7 70 432 48l-22 59.3L272 480l-48 0 0-48 0-128 0-48-48 0L48 256 0 256l0-48z" />
    </Icon>
);

export default LocationArrow;