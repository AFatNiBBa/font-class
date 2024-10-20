
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=light location-arrow}
 * @preview ![location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/location-arrow.svg)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 224L48 224 400 80 256 432l0-176c0-17.7-14.3-32-32-32zm-32 32l32 0 0 32 0 144c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l144 0z" />
    </Icon>
);

export default LocationArrow;