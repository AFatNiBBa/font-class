
import { Icon } from "../../index";

/**
 * A component that renders the `circle-video` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-video?s=sharp-solid circle-video}
 * @preview ![circle-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-video.svg)
 */
const CircleVideo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 160l192 0 0 192-192 0 0-192zM416 336l-64-48 0-64 64-48 0 160z" />
    </Icon>
);

export default CircleVideo;