
import { Icon } from "../../index";

/**
 * A component that renders the `circle-video` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-video?s=sharp-regular circle-video}
 * @preview ![circle-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-video.svg)
 */
const CircleVideo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM144 176l0 160 144 0 0-160-144 0zM320 288l64 48 0-160-64 48 0 64z" />
    </Icon>
);

export default CircleVideo;