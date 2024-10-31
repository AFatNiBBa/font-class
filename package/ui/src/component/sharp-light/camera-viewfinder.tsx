
import { Icon } from "../../index";

/**
 * A component that renders the `camera-viewfinder` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-viewfinder?s=sharp-light camera-viewfinder}
 * @preview ![camera-viewfinder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/camera-viewfinder.svg)
 */
const CameraViewfinder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L16 0 144 0l16 0 0 32-16 0L32 32l0 112 0 16L0 160l0-16L0 16 0 0zM320 96l12 32 52 0 32 0 0 32 0 192 0 32-32 0-256 0-32 0 0-32 0-192 0-32 32 0 52 0 12-32 128 0zm12 64l-22.2 0L302 139.2 297.8 128l-83.6 0L210 139.2 202.2 160 180 160l-52 0 0 192 256 0 0-192-52 0zm-44 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM496 0l16 0 0 16 0 128 0 16-32 0 0-16 0-112L368 32l-16 0 0-32 16 0L496 0zM0 512l0-16L0 368l0-16 32 0 0 16 0 112 112 0 16 0 0 32-16 0L16 512 0 512zm496 0l-128 0-16 0 0-32 16 0 112 0 0-112 0-16 32 0 0 16 0 128 0 16-16 0z" />
    </Icon>
);

export default CameraViewfinder;