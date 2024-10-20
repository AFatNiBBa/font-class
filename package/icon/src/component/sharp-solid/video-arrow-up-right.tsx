
import { Icon } from "../../index";

/**
 * A component that renders the `video-arrow-up-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-arrow-up-right?s=sharp-solid video-arrow-up-right}
 * @preview ![video-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/video-arrow-up-right.svg)
 */
const VideoArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 64l384 0 0 384L0 448 0 64zm576 0l0 384L416 337.1l0-162.3L576 64zM152 160l-24 0 0 48 24 0 54.1 0L103 311l-17 17L120 361.9l17-17 103-103 0 54.1 0 24 48 0 0-24 0-112 0-24-24 0-112 0z" />
    </Icon>
);

export default VideoArrowUpRight;