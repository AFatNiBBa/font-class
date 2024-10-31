
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-viewfinder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-viewfinder?s=sharp-duotone-solid camera-viewfinder}
 * @preview ![camera-viewfinder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/camera-viewfinder.svg)
 */
const CameraViewfinder: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 24 0 136l0 24 48 0 0-24 0-88 88 0 24 0 0-48L136 0 24 0 0 0zM0 352l0 24L0 488l0 24 24 0 112 0 24 0 0-48-24 0-88 0 0-88 0-24L0 352zM352 0l0 48 24 0 88 0 0 88 0 24 48 0 0-24 0-112 0-24L488 0 376 0 352 0zm0 464l0 48 24 0 112 0 24 0 0-24 0-112 0-24-48 0 0 24 0 88-88 0-24 0z" />
        <path d="M192 96l-12 32-84 0 0 256 320 0 0-256-84 0L320 96 192 96zm64 96a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default CameraViewfinder;