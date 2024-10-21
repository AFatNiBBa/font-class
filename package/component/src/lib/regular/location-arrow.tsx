
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=regular location-arrow}
 * @preview ![location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/location-arrow.svg)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 208l-94.6 0 241.4-98.7L272 350.6l0-94.6c0-26.5-21.5-48-48-48zm-48 48l48 0 0 48 0 128c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l128 0z" />
    </Icon>
);

export default LocationArrow;