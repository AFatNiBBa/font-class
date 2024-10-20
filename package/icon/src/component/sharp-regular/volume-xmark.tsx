
import { Icon } from "../../index";

/**
 * A component that renders the `volume-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-xmark?s=sharp-regular volume-xmark}
 * @preview ![volume-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/volume-xmark.svg)
 */
const VolumeXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M159.9 316.1L146.2 304 128 304l-80 0 0-96 80 0 18.2 0 13.6-12.1L272 96.2l0 319.6L159.9 316.1zM0 352l48 0 80 0L272 480l48 0 0-48 0-352 0-48-48 0L128 160l-80 0L0 160l0 48 0 96 0 48zM441 183l-17-17L390.1 200l17 17 39 39-39 39-17 17L424 345.9l17-17 39-39 39 39 17 17L569.9 312l-17-17-39-39 39-39 17-17L536 166.1l-17 17-39 39-39-39z" />
    </Icon>
);

export default VolumeXmark;