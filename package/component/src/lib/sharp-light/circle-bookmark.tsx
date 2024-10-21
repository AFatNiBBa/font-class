
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bookmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bookmark?s=sharp-light circle-bookmark}
 * @preview ![circle-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-bookmark.svg)
 */
const CircleBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm17.8-218.6L256 281.5l-17.8 11.8L192 324.2 192 160l128 0 0 164.2-46.2-30.8zM160 384l32-21.3L256 320l64 42.7L352 384l0-38.5L352 160l0-32-32 0-128 0-32 0 0 32 0 185.5 0 38.5z" />
    </Icon>
);

export default CircleBookmark;