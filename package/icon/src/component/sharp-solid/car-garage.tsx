
import { Icon } from "../../index";

/**
 * A component that renders the `car-garage` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-garage?s=sharp-solid car-garage}
 * @preview ![car-garage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/car-garage.svg)
 */
const CarGarage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M335 11.7l272 144 28.3 15-29.9 56.6-28.3-15L320 76.2 63 212.3l-28.3 15L4.7 170.7l28.3-15 272-144 15-7.9 15 7.9zM202.9 160l21.1 0 192 0 21.1 0 8.3 19.4L492 288l36 0 0 96 0 64 0 64-80 0 0-64-256 0 0 64-80 0 0-64 0-64 0-96 36 0 46.5-108.6 8.3-19.4zm192 64l-149.8 0-27.4 64 204.7 0-27.4-64zM192 392a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm280-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default CarGarage;