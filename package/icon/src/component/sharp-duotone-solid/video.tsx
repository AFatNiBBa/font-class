
import { Icon, generic } from "../../index";

/**
 * A component that renders the `video` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video?s=sharp-duotone-solid video}
 * @preview ![video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/video.svg)
 */
const Video: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l384 0 0 133L384 315l0 133L0 448 0 64z" />
        <path d="M576 64V448L384 315V197L576 64z" />
    </Icon>
);

export default Video;