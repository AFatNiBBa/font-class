
import { Icon } from "../../index";

/**
 * A component that renders the `video` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video?s=sharp-regular video}
 * @preview ![video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/video.svg)
 */
const Video: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 112l0 288 288 0 0-288L48 112zM0 64l48 0 288 0 48 0 0 48 0 48 0 192 0 48 0 48-48 0L48 448 0 448l0-48L0 112 0 64zM416 314.3l112 56 0-228.7-112 56 0-53.7L528 88l48-24 0 53.7 0 276.7 0 53.7-48-24L416 368l0-53.7z" />
    </Icon>
);

export default Video;