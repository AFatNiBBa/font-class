
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boxes-packing` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boxes-packing?s=sharp-duotone-solid boxes-packing}
 * @preview ![boxes-packing](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/boxes-packing.svg)
 */
const BoxesPacking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256 0L640 0l0 512-256 0 0-256 32 0 0-128-160 0L256 0zM420.7 324.7l22.6 22.6L480 310.6 480 432l0 16 32 0 0-16 0-121.4 36.7 36.7 22.6-22.6-64-64L496 249.4l-11.3 11.3-64 64z" />
        <path d="M384 160l0 64L0 224l0-64 384 0zM32 256l320 0 0 256L32 512l0-256zm96 64l0 32 128 0 0-32-128 0z" />
    </Icon>
);

export default BoxesPacking;