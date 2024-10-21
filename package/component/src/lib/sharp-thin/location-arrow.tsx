
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=sharp-thin location-arrow}
 * @preview ![location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/location-arrow.svg)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 240l0 16 0 208 20.9 0 144-388.9L16 219.1 16 240l208 0 16 0zM0 208L412.2 55.3 432 48l-7.3 19.8L272 480l-32 0-16 0 0-16 0-192 0-16-16 0L16 256 0 256l0-16 0-32z" />
    </Icon>
);

export default LocationArrow;