
import { Icon } from "../../index";

/**
 * A component that renders the `video-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-plus?s=sharp-solid video-plus}
 * @preview ![video-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/video-plus.svg)
 */
const VideoPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 64l384 0 0 384L0 448 0 64zm576 0l0 384L416 337.1l0-162.3L576 64zM216 184l0-24-48 0 0 24 0 48-48 0-24 0 0 48 24 0 48 0 0 48 0 24 48 0 0-24 0-48 48 0 24 0 0-48-24 0-48 0 0-48z" />
    </Icon>
);

export default VideoPlus;