
import { Icon, generic } from "../../index";

/**
 * A component that renders the `video-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-plus?s=sharp-duotone-solid video-plus}
 * @preview ![video-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/video-plus.svg)
 */
const VideoPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l384 0 0-133L384 197l0-133L0 64zM96 232l24 0 48 0 0-48 0-24 48 0 0 24 0 48 48 0 24 0 0 48-24 0-48 0 0 48 0 24-48 0 0-24 0-48-48 0-24 0 0-48z" />
        <path d="M576 448l0-384L384 197 384 315 576 448zM216 184l0-24-48 0 0 24 0 48-48 0-24 0 0 48 24 0 48 0 0 48 0 24 48 0 0-24 0-48 48 0 24 0 0-48-24 0-48 0 0-48z" />
    </Icon>
);

export default VideoPlus;