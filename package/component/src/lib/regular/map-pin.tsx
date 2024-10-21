
import { Icon } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=regular map-pin}
 * @preview ![map-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/map-pin.svg)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 144a96 96 0 1 1 192 0A96 96 0 1 1 64 144zM184 286c68.1-11.4 120-70.7 120-142C304 64.5 239.5 0 160 0S16 64.5 16 144c0 71.4 51.9 130.6 120 142l0 202c0 13.3 10.7 24 24 24s24-10.7 24-24l0-202z" />
    </Icon>
);

export default MapPin;