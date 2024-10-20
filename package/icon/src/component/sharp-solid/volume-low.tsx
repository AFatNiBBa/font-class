
import { Icon } from "../../index";

/**
 * A component that renders the `volume-low` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-low?s=sharp-solid volume-low}
 * @preview ![volume-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/volume-low.svg)
 */
const VolumeLow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 160L0 352l128 0L272 480l48 0 0-448-48 0L128 160 0 160zM409.6 332.8C432.9 315.3 448 287.4 448 256s-15.1-59.3-38.4-76.8l-28.8 38.4c11.7 8.8 19.2 22.7 19.2 38.4s-7.5 29.6-19.2 38.4l28.8 38.4z" />
    </Icon>
);

export default VolumeLow;