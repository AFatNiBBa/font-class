
import { Icon } from "../../index";

/**
 * A component that renders the `volume-off` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-off?s=sharp-regular volume-off}
 * @preview ![volume-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/volume-off.svg)
 */
const VolumeOff: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M146.2 304l13.6 12.1L272 415.8l0-319.6L159.9 195.9 146.2 208 128 208l-80 0 0 96 80 0 18.2 0zM48 352L0 352l0-48 0-96 0-48 48 0 80 0L272 32l48 0 0 48 0 352 0 48-48 0L128 352l-80 0z" />
    </Icon>
);

export default VolumeOff;