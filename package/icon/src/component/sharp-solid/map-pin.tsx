
import { Icon } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=sharp-solid map-pin}
 * @preview ![map-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/map-pin.svg)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80l0-32c-53 0-96 43-96 96l32 0c0-35.3 28.7-64 64-64zM128 480l0-162.9c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9L192 480l0 32-64 0 0-32z" />
    </Icon>
);

export default MapPin;