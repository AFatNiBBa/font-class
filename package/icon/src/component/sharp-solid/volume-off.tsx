
import { Icon } from "../../index";

/**
 * A component that renders the `volume-off` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-off?s=sharp-solid volume-off}
 * @preview ![volume-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/volume-off.svg)
 */
const VolumeOff: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 352V160H128L272 32h48V480H272L128 352H0z" />
    </Icon>
);

export default VolumeOff;