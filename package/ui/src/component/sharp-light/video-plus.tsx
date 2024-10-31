
import { Icon } from "../../index";

/**
 * A component that renders the `video-plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-plus?s=sharp-light video-plus}
 * @preview ![video-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/video-plus.svg)
 */
const VideoPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 96l0 320L32 416 32 96l320 0zM32 64L0 64 0 96 0 416l0 32 32 0 320 0 32 0 0-32 0-64 0-192 0-64 0-32-32 0L32 64zM416 332.2l0 35.8 128 64 32 16 0-35.8 0-312.4L576 64 544 80 416 144l0 35.8 128-64 0 280.4-128-64zM208 176l0-16-32 0 0 16 0 64-64 0-16 0 0 32 16 0 64 0 0 64 0 16 32 0 0-16 0-64 64 0 16 0 0-32-16 0-64 0 0-64z" />
    </Icon>
);

export default VideoPlus;