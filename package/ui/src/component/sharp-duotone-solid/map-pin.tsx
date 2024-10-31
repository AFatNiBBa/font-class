
import { Icon, generic } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=sharp-duotone-solid map-pin}
 * @preview ![map-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/map-pin.svg)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M128 284.4c5.1 1.2 10.4 2.1 15.8 2.7c2.7 .3 5.3 .5 8.1 .7c1.3 .1 2.7 .1 4.1 .2c1.2 0 2.5 .1 4 .1c11 0 21.7-1.2 32-3.6L192 480l0 32-64 0 0-32 0-195.6z" />
        <path d="M160 288A144 144 0 1 0 160 0a144 144 0 1 0 0 288zM96 144l-32 0c0-53 43-96 96-96l0 32c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default MapPin;