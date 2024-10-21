
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-retro` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-retro?s=sharp-duotone-solid camera-retro}
 * @preview ![camera-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/camera-retro.svg)
 */
const CameraRetro: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l64 0 96 0 32 0 64-32 256 0 0 128-256 0L0 160 0 64z" />
        <path d="M64 32l96 0 0 32L64 64l0-32zM0 480L0 160l512 0 0 320L0 480zm256-80a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
    </Icon>
);

export default CameraRetro;