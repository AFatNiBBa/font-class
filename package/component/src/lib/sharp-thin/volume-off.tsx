
import { Icon } from "../../index";

/**
 * A component that renders the `volume-off` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-off?s=sharp-thin volume-off}
 * @preview ![volume-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/volume-off.svg)
 */
const VolumeOff: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M134.1 336l4.5 4L278.1 464l25.9 0 0-416-25.9 0L138.6 172l-4.5 4-6.1 0L16 176l0 160 112 0 6.1 0zM16 352L0 352l0-16L0 176l0-16 16 0 112 0L272 32l32 0 16 0 0 16 0 416 0 16-16 0-32 0L128 352 16 352z" />
    </Icon>
);

export default VolumeOff;