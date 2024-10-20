
import { Icon } from "../../index";

/**
 * A component that renders the `file-video` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-video?s=sharp-regular file-video}
 * @preview ![file-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-video.svg)
 */
const FileVideo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 464l0-304-112 0 0-112L48 48l0 416 288 0zM48 0L256 0 384 128l0 336 0 48-48 0L48 512 0 512l0-48L0 48 0 0 48 0zM80 256l160 0 0 48 64-32 0 128-64-32 0 48L80 416l0-160z" />
    </Icon>
);

export default FileVideo;