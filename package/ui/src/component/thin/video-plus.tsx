
import { Icon } from "../../index";

/**
 * A component that renders the `video-plus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-plus?s=thin video-plus}
 * @preview ![video-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/video-plus.svg)
 */
const VideoPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 80c26.5 0 48 21.5 48 48l0 74.9 0 106.2 0 74.9c0 26.5-21.5 48-48 48L64 432c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l256 0zm64 304l0-47.2 0-27.7 0-106.2 0-27.7 0-47.2c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64zm32-29.6l103.4 56.9c5.6 3.1 12 4.7 18.4 4.7c21.1 0 38.2-17.1 38.2-38.2l0-243.6c0-21.1-17.1-38.2-38.2-38.2c-6.4 0-12.8 1.6-18.4 4.7L416 157.6l0 18.3 111.1-61.1c3.3-1.8 7-2.7 10.7-2.7c12.3 0 22.2 9.9 22.2 22.2l0 243.6c0 12.3-9.9 22.2-22.2 22.2c-3.7 0-7.4-.9-10.7-2.7L416 336.1l0 18.3zM200 168c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 80-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 0 80c0 4.4 3.6 8 8 8s8-3.6 8-8l0-80 80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0 0-80z" />
    </Icon>
);

export default VideoPlus;