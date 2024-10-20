
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow-up` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow-up?s=solid location-arrow-up}
 * @preview ![location-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/location-arrow-up.svg)
 */
const LocationArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M35.8 431.9L190.9 54.2C196.4 40.8 209.5 32 224 32s27.6 8.8 33.1 22.2L412.2 431.9c9.4 23-7.4 48.1-32.3 48.1c-7.8 0-15.3-2.6-21.4-7.3L224 368 89.4 472.7C83.3 477.4 75.8 480 68 480c-24.8 0-41.7-25.2-32.3-48.1z" />
    </Icon>
);

export default LocationArrowUp;