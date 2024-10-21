
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow-up?s=sharp-light location-arrow-up}
 * @preview ![location-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/location-arrow-up.svg)
 */
const LocationArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 328.9l18.4 12.8 132 92.4L224 108.4 73.6 434.2l132-92.4L224 328.9zM32 448L206.4 70.2 224 32l17.6 38.2L416 448l-32 32L224 368 64 480 32 448z" />
    </Icon>
);

export default LocationArrowUp;