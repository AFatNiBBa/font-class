
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow-up?s=regular location-arrow-up}
 * @preview ![location-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/location-arrow-up.svg)
 */
const LocationArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 98.5L87.2 420l122.1-95c8.7-6.7 20.8-6.7 29.5 0l122.1 95L224 98.5zM190.8 54c5.7-13.3 18.7-22 33.2-22s27.5 8.6 33.2 22L412.5 418.9c2.3 5.4 3.5 11.3 3.5 17.2l0 2.1c0 23.1-18.7 41.9-41.9 41.9c-9.3 0-18.4-3.1-25.7-8.8L224 374.4 99.6 471.2c-7.3 5.7-16.4 8.8-25.7 8.8C50.7 480 32 461.3 32 438.1l0-2.1c0-5.9 1.2-11.8 3.5-17.2L190.8 54z" />
    </Icon>
);

export default LocationArrowUp;