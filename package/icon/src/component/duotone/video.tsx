
import { Icon, generic } from "../../index";

/**
 * A component that renders the `video` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video?s=duotone video}
 * @preview ![video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/video.svg)
 */
const Video: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 68.2 0 119.6 0 68.2c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
        <path d="M576 128c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6L384 196.2V315.8l142.2 94.8c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2V128z" />
    </Icon>
);

export default Video;