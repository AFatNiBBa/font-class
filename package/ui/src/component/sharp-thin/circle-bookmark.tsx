
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bookmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bookmark?s=sharp-thin circle-bookmark}
 * @preview ![circle-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-bookmark.svg)
 */
const CircleBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm8.9-205.3l-8.9-5.9-8.9 5.9L176 354.1 176 144l160 0 0 210.1-71.1-47.4zM160 384l16-10.7L256 320l80 53.3L352 384l0-19.2L352 144l0-16-16 0-160 0-16 0 0 16 0 220.8 0 19.2z" />
    </Icon>
);

export default CircleBookmark;