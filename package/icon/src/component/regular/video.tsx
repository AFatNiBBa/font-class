
import { Icon } from "../../index";

/**
 * A component that renders the `video` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video?s=regular video}
 * @preview ![video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/video.svg)
 */
const Video: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 33 0 190 0 33c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM528 363.4l0-214.7L416 199l0-52.6L520.3 99.5c5.1-2.3 10.6-3.5 16.2-3.5c21.8 0 39.5 17.7 39.5 39.5l0 241c0 21.8-17.7 39.5-39.5 39.5c-5.6 0-11.1-1.2-16.2-3.5L416 365.6l0-52.6 112 50.4z" />
    </Icon>
);

export default Video;