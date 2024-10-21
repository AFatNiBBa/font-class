
import { Icon } from "../../index";

/**
 * A component that renders the `camera-polaroid` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-polaroid?s=sharp-regular camera-polaroid}
 * @preview ![camera-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/camera-polaroid.svg)
 */
const CameraPolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M464 270.5l0-14.5 0-176L112 80l0 176 0 14.5-8.1 12.1L68.4 336l439.3 0-35.6-53.4L464 270.5zM528 384L48 384l0 48 480 0 0-48zm48-32l0 80 0 48-48 0L48 480 0 480l0-48 0-80 64-96L64 80l0-48 48 0 352 0 48 0 0 48 0 176 64 96zM432 112l0 48-48 0 0-48 48 0zM288 128a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm32 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default CameraPolaroid;