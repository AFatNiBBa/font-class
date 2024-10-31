
import { Icon } from "../../index";

/**
 * A component that renders the `circle-video` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-video?s=sharp-thin circle-video}
 * @preview ![circle-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-video.svg)
 */
const CircleVideo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm48-336l0 160-160 0 0-160 160 0zM144 160l-16 0 0 16 0 160 0 16 16 0 160 0 16 0 0-16 0-35.3 69.9 19.1 10.1 2.8 0-10.5 0-112 0-10.5-10.1 2.8L320 211.3l0-35.3 0-16-16 0-160 0zm176 67.9l64-17.5 0 91.1-64-17.5 0-56.1z" />
    </Icon>
);

export default CircleVideo;