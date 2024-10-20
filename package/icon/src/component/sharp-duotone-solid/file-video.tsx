
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-video` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-video?s=sharp-duotone-solid file-video}
 * @preview ![file-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-video.svg)
 */
const FileVideo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM64 256l0 160 160 0 0-160L64 256zm192 48l0 64 64 32 0-128-64 32z" />
        <path d="M384 160L224 0l0 160 160 0zM64 256l0 160 160 0 0-160L64 256zM320 400l0-128-64 32 0 64 64 32z" />
    </Icon>
);

export default FileVideo;