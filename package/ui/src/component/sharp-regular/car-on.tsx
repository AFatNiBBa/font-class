
import { Icon } from "../../index";

/**
 * A component that renders the `car-on` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-on?s=sharp-regular car-on}
 * @preview ![car-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/car-on.svg)
 */
const CarOn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24l0 80 0 24-48 0 0-24 0-80 0-24 48 0 0 24zM135.1 160l16.9 0 208 0 16.9 0 5.7 15.9L416.9 272l47.1 0 0 48 0 80 0 16 0 32 0 64-48 0 0-64L96 448l0 64-48 0 0-64 0-32 0-16 0-80 0-48 47.1 0 34.3-96.1 5.7-15.9zm208 48l-174.2 0-22.9 64 219.9 0-22.9-64zM416 320L96 320l0 80 320 0 0-80zM144 336a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm200 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM56 22.1L73 39l48 48 17 17L104 137.9 87 121 39 73l-17-17L56 22.1zM439 39l17-17L489.9 56 473 73l-48 48-17 17L374.1 104l17-17 48-48z" />
    </Icon>
);

export default CarOn;