
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-retro` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-retro?s=duotone camera-retro}
 * @preview ![camera-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/camera-retro.svg)
 */
const CameraRetro: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128C0 92.7 28.7 64 64 64l96 0 32 0 50.5-25.2c8.9-4.4 18.7-6.8 28.6-6.8L448 32c35.3 0 64 28.7 64 64l0 64-256 0L0 160l0-32z" />
        <path d="M64 48c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 16L64 64l0-16zM0 416L0 160l512 0 0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zm256-16a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
    </Icon>
);

export default CameraRetro;