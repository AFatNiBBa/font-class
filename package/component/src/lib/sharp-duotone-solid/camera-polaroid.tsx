
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-polaroid` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-polaroid?s=sharp-duotone-solid camera-polaroid}
 * @preview ![camera-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/camera-polaroid.svg)
 */
const CameraPolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 96 0 32 32 0 512 0 32 0 0-32 0-96L0 352zm96 48l16 0 352 0 16 0 0 32-16 0-352 0-16 0 0-32zM224 192a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M64 32l32 0 384 0 32 0 0 32 0 182.3 58.6 87.9 5.4 8.1 0 9.7L0 352l0-9.7 5.4-8.1L64 246.3 64 64l0-32zM288 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM384 96l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default CameraPolaroid;