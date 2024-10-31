
import { Icon } from "../../index";

/**
 * A component that renders the `boxes-packing` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boxes-packing?s=sharp-solid boxes-packing}
 * @preview ![boxes-packing](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/boxes-packing.svg)
 */
const BoxesPacking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 0L256 0l0 128 160 0 0 128-32 0 0 256 256 0L640 0zM507.3 260.7l64 64-22.6 22.6L512 310.6 512 432l0 16-32 0 0-16 0-121.4-36.7 36.7-22.6-22.6 64-64L496 249.4l11.3 11.3zM0 160l0 64 384 0 0-64L0 160zm352 96L32 256l0 256 320 0 0-256zm-96 64l0 32-128 0 0-32 128 0z" />
    </Icon>
);

export default BoxesPacking;