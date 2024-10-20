
import { Icon } from "../../index";

/**
 * A component that renders the `volume` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume?s=sharp-regular volume}
 * @preview ![volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/volume.svg)
 */
const Volume: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M191.9 316.1L178.2 304 160 304l-80 0 0-96 80 0 18.2 0 13.6-12.1L304 96.2l0 319.6L191.9 316.1zM32 352l48 0 80 0L304 480l48 0 0-48 0-352 0-48-48 0L160 160l-80 0-48 0 0 48 0 96 0 48zm409.6-19.2C464.9 315.3 480 287.4 480 256s-15.1-59.3-38.4-76.8l-28.8 38.4c11.7 8.8 19.2 22.7 19.2 38.4s-7.5 29.6-19.2 38.4l28.8 38.4zm57.6 76.8c46.6-35 76.8-90.8 76.8-153.6s-30.2-118.6-76.8-153.6l-28.8 38.4c35 26.3 57.6 68.1 57.6 115.2s-22.6 88.9-57.6 115.2l28.8 38.4z" />
    </Icon>
);

export default Volume;