
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow-up?s=duotone location-arrow-up}
 * @preview ![location-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/location-arrow-up.svg)
 */
const LocationArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M36.6 432L201.7 46.7C205.5 37.8 214.3 32 224 32s18.5 5.8 22.3 14.7L411.4 432c9.7 22.7-6.9 48-31.6 48c-7.7 0-15.1-2.6-21.1-7.2L224 368 89.3 472.8c-6 4.7-13.5 7.2-21.1 7.2c-24.7 0-41.4-25.3-31.6-48z" />
    </Icon>
);

export default LocationArrowUp;