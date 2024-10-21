
import { Icon } from "../../index";

/**
 * A component that renders the `car-garage` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-garage?s=sharp-regular car-garage}
 * @preview ![car-garage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/car-garage.svg)
 */
const CarGarage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M331 10.7l280 144 21.3 11-22 42.7-21.3-11L320 59 51 197.3l-21.3 11-22-42.7 21.3-11 280-144L320 5l11 5.6zM199.1 160l16.9 0 208 0 16.9 0 5.7 15.9L480.9 272l47.1 0 0 48 0 80 0 16 0 32 0 64-48 0 0-64-320 0 0 64-48 0 0-64 0-32 0-16 0-80 0-48 47.1 0 34.3-96.1 5.7-15.9zm208 48l-174.2 0-22.9 64 219.9 0-22.9-64zM480 320l-320 0 0 80 320 0 0-80zM208 336a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm200 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default CarGarage;