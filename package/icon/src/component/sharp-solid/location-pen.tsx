
import { Icon } from "../../index";

/**
 * A component that renders the `location-pen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pen?s=sharp-solid location-pen}
 * @preview ![location-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/location-pen.svg)
 */
const LocationPen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192C0 304 192 512 192 512zM240.8 96l47.3 47.3L259 172.4l-47.3-47.3L240.8 96zm-51.7 51.7L236.4 195l-85.2 85.2L96 288.1l7.9-55.3 85.2-85.2z" />
    </Icon>
);

export default LocationPen;