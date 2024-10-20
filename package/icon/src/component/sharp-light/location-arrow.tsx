
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=sharp-light location-arrow}
 * @preview ![location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/location-arrow.svg)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 224l0 32 0 175.1L377.8 102.2 48.9 224 224 224l32 0zM0 208L392.5 62.6 432 48 417.4 87.5 272 480l-16 0-32 0 0-32 0-160 0-32-32 0L32 256 0 256l0-32 0-16z" />
    </Icon>
);

export default LocationArrow;