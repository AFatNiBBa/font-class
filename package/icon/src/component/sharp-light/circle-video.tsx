
import { Icon } from "../../index";

/**
 * A component that renders the `circle-video` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-video?s=sharp-light circle-video}
 * @preview ![circle-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-video.svg)
 */
const CircleVideo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm32-320l0 24 0 80 0 24-128 0 0-128 128 0zm32 12l0-12 0-32-32 0-128 0-32 0 0 32 0 128 0 32 32 0 128 0 32 0 0-32 0-12 64 24 32 12 0-34.2 0-107.6 0-34.2-32 12-64 24zm0 34.2l64-24 0 83.6-64-24 0-35.6z" />
    </Icon>
);

export default CircleVideo;