
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow-up?s=sharp-duotone-solid location-arrow-up}
 * @preview ![location-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-arrow-up.svg)
 */
const LocationArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80 480L32 448 224 32 416 448l-48 32L224 368 80 480z" />
    </Icon>
);

export default LocationArrowUp;