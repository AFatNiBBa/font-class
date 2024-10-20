
import { Icon } from "../../index";

/**
 * A component that renders the `volume-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-xmark?s=sharp-solid volume-xmark}
 * @preview ![volume-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/volume-xmark.svg)
 */
const VolumeXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 160L0 352l128 0L272 480l48 0 0-448-48 0L128 160 0 160zm441 23l-17-17L390.1 200l17 17 39 39-39 39-17 17L424 345.9l17-17 39-39 39 39 17 17L569.9 312l-17-17-39-39 39-39 17-17L536 166.1l-17 17-39 39-39-39z" />
    </Icon>
);

export default VolumeXmark;