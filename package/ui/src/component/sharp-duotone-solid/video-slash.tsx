
import { Icon, generic } from "../../index";

/**
 * A component that renders the `video-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-slash?s=sharp-duotone-solid video-slash}
 * @preview ![video-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/video-slash.svg)
 */
const VideoSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L416 423.8l0 24.2L32 448l0-326.8zM111.8 64L416 64l0 236.2L111.8 64zM448 174.9L608 64l0 384-15.1-10.5L448 325l0-150.2z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default VideoSlash;