
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-security` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-security?s=sharp-duotone-solid camera-security}
 * @preview ![camera-security](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/camera-security.svg)
 */
const CameraSecurity: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 208a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
        <path d="M0 0L448 0l0 416-144 0 80 56 0 40L64 512l0-40 80-56L0 416 0 0zM224 336a128 128 0 1 0 0-256 128 128 0 1 0 0 256z" />
    </Icon>
);

export default CameraSecurity;