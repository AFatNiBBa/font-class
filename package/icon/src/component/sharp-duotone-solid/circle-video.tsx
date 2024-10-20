
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-video` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-video?s=sharp-duotone-solid circle-video}
 * @preview ![circle-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-video.svg)
 */
const CircleVideo: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-96l192 0 0 192-192 0 0-192zm224 64l64-48 0 160-64-48 0-64z" />
        <path d="M320 160l-192 0 0 192 192 0 0-192zm32 128l64 48 0-160-64 48 0 64z" />
    </Icon>
);

export default CircleVideo;