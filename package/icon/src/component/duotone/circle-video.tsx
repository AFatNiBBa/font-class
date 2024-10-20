
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-video` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-video?s=duotone circle-video}
 * @preview ![circle-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-video.svg)
 */
const CircleVideo: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128zm224 32l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3l0 103.4c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1L352 288l0-64z" />
        <path d="M160 160c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-128 0zM352 288l44.9 29.9c2 1.3 4.4 2.1 6.8 2.1c6.8 0 12.3-5.5 12.3-12.3l0-103.4c0-6.8-5.5-12.3-12.3-12.3c-2.4 0-4.8 .7-6.8 2.1L352 224l0 64z" />
    </Icon>
);

export default CircleVideo;