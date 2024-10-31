
import { Icon } from "../../index";

/**
 * A component that renders the `circle-video` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-video?s=regular circle-video}
 * @preview ![circle-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-video.svg)
 */
const CircleVideo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144-56c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24l0-112zM364.9 317.9L320 288l0-64 44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3l0 103.4c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1z" />
    </Icon>
);

export default CircleVideo;