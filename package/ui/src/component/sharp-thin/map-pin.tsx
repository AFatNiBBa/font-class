
import { Icon } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=sharp-thin map-pin}
 * @preview ![map-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/map-pin.svg)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 272a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM304 144c0 76.8-60.2 139.6-136 143.8L168 504l0 8-16 0 0-8 0-216.2C76.2 283.6 16 220.8 16 144C16 64.5 80.5 0 160 0s144 64.5 144 144zM80 136l-16 0c0-48.6 39.4-88 88-88l0 16c-39.8 0-72 32.2-72 72z" />
    </Icon>
);

export default MapPin;