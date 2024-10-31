
import { Icon, generic } from "../../index";

/**
 * A component that renders the `video-arrow-down-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-arrow-down-left?s=sharp-duotone-solid video-arrow-down-left}
 * @preview ![video-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/video-arrow-down-left.svg)
 */
const VideoArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l384 0 0-133L384 197l0-133L0 64zM96 192l48 0 0 24 0 54.1L247 167l17-17L297.9 184l-17 17-103 103 54.1 0 24 0 0 48-24 0-112 0-24 0 0-24 0-112 0-24z" />
        <path d="M576 448l0-384L384 197 384 315 576 448zM232 352l24 0 0-48-24 0-54.1 0L281 201l17-17L264 150.1l-17 17-103 103 0-54.1 0-24-48 0 0 24 0 112 0 24 24 0 112 0z" />
    </Icon>
);

export default VideoArrowDownLeft;