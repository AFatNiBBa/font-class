
import { Icon, generic } from "../../index";

/**
 * A component that renders the `video-arrow-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-arrow-up-right?s=sharp-duotone-solid video-arrow-up-right}
 * @preview ![video-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/video-arrow-up-right.svg)
 */
const VideoArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l384 0 0-133L384 197l0-133L0 64zM86.1 328l17-17 103-103L152 208l-24 0c0-16 0-32 0-48l24 0 112 0 24 0c0 8 0 16 0 24c0 37.3 0 74.7 0 112c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-18 0-36 0-54.1c-34.3 34.3-68.7 68.7-103 103c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9z" />
        <path d="M576 448l0-384L384 197 384 315 576 448zM152 160l-24 0 0 48 24 0 54.1 0L103 311l-17 17L120 361.9l17-17 103-103 0 54.1 0 24 48 0 0-24 0-112 0-24-24 0-112 0z" />
    </Icon>
);

export default VideoArrowUpRight;