
import { Icon } from "../../index";

/**
 * A component that renders the `volume-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-xmark?s=sharp-light volume-xmark}
 * @preview ![volume-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/volume-xmark.svg)
 */
const VolumeXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M149.3 328.1l-9.1-8.1L128 320l-96 0 0-128 96 0 12.2 0 9.1-8.1L284.2 64l3.8 0 0 384-3.8 0L149.3 328.1zM0 352l32 0 96 0L272 480l16 0 32 0 0-32 0-384 0-32-32 0-16 0L128 160l-96 0L0 160l0 32L0 320l0 32zm411.3-4.7L480 278.6l68.7 68.7 22.6-22.6L502.6 256l68.7-68.7-22.6-22.6L480 233.4l-68.7-68.7-22.6 22.6L457.4 256l-68.7 68.7 22.6 22.6z" />
    </Icon>
);

export default VolumeXmark;