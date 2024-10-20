
import { Icon } from "../../index";

/**
 * A component that renders the `video` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video?s=sharp-solid video}
 * @preview ![video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/video.svg)
 */
const Video: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 64L0 64 0 448l384 0 0-384zM576 448l0-384L416 174.9l0 162.3L576 448z" />
    </Icon>
);

export default Video;