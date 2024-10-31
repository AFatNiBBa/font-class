
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow-up?s=sharp-regular location-arrow-up}
 * @preview ![location-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/location-arrow-up.svg)
 */
const LocationArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 307.2l29.5 22.9 86.2 67L224 146.5 108.3 397.2l86.2-67L224 307.2zM32 448L197.6 89.3 224 32l26.4 57.3L416 448l-48 32L224 368 80 480 32 448z" />
    </Icon>
);

export default LocationArrowUp;