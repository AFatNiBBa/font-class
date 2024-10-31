
import { Icon } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=sharp-light map-pin}
 * @preview ![map-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/map-pin.svg)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 256a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM304 144c0 74.1-56 135.2-128 143.1L176 496l0 16-32 0 0-16 0-208.9c-72-8-128-69-128-143.1C16 64.5 80.5 0 160 0s144 64.5 144 144zm-192 0l-32 0c0-44.2 35.8-80 80-80l0 32c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default MapPin;