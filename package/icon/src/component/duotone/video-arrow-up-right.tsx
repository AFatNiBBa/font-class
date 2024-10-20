
import { Icon, generic } from "../../index";

/**
 * A component that renders the `video-arrow-up-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-arrow-up-right?s=duotone video-arrow-up-right}
 * @preview ![video-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/video-arrow-up-right.svg)
 */
const VideoArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-68.2 0-119.6 0-68.2c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zM96 328c0-6.1 2.3-12.3 7-17l103-103L152 208c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-54.1L137 345c-9.4 9.4-24.6 9.4-33.9 0c-4.7-4.7-7-10.8-7-17z" />
        <path d="M559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6L384 315.8l0-119.6 142.2-94.8c9.8-6.5 22.4-7.2 32.9-1.6zM152 160l112 0c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-54.1L137 345c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l103-103L152 208c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default VideoArrowUpRight;