
import { Icon } from "../../index";

/**
 * A component that renders the `location-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-check?s=sharp-solid location-check}
 * @preview ![location-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/location-check.svg)
 */
const LocationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192C0 304 192 512 192 512zm-9.7-249.7l-17 17-17-17L81.7 195.6l33.9-33.9 49.7 49.7 103-103 33.9 33.9-120 120z" />
    </Icon>
);

export default LocationCheck;