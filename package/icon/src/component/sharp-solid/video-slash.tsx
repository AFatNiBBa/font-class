
import { Icon } from "../../index";

/**
 * A component that renders the `video-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-slash?s=sharp-solid video-slash}
 * @preview ![video-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/video-slash.svg)
 */
const VideoSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7-28-21.8L608 448l0-384L448 174.9 448 325l-32-24.8L416 64 111.8 64 48.4 14.8zM416 423.8L32 121.2 32 448l384 0 0-24.2z" />
    </Icon>
);

export default VideoSlash;