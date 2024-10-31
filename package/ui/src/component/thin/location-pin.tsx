
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin?s=thin location-pin}
 * @preview ![location-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/location-pin.svg)
 */
const LocationPin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M350.2 261.6c-11.3 26.9-27.1 55.8-44.7 84.3c-35.2 57-76.8 111.4-102.3 143.2c-5.9 7.3-16.6 7.3-22.4 0C155.3 457.3 113.7 403 78.5 345.9c-17.6-28.5-33.4-57.4-44.7-84.3C22.4 234.5 16 210.7 16 192C16 94.8 94.8 16 192 16s176 78.8 176 176c0 18.7-6.4 42.5-17.8 69.6zM215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0z" />
    </Icon>
);

export default LocationPin;