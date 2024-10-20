
import { Icon } from "../../index";

/**
 * A component that renders the `volume-low` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-low?s=sharp-regular volume-low}
 * @preview ![volume-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/volume-low.svg)
 */
const VolumeLow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M159.9 316.1L146.2 304 128 304l-80 0 0-96 80 0 18.2 0 13.6-12.1L272 96.2l0 319.6L159.9 316.1zM0 352l48 0 80 0L272 480l48 0 0-48 0-352 0-48-48 0L128 160l-80 0L0 160l0 48 0 96 0 48zm409.6-19.2C432.9 315.3 448 287.4 448 256s-15.1-59.3-38.4-76.8l-28.8 38.4c11.7 8.8 19.2 22.7 19.2 38.4s-7.5 29.6-19.2 38.4l28.8 38.4z" />
    </Icon>
);

export default VolumeLow;