
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bookmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bookmark?s=thin circle-bookmark}
 * @preview ![circle-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-bookmark.svg)
 */
const CircleBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-144l-70-56c-5.8-4.7-14.1-4.7-20 0l-70 56 0-192c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 192zm-10 12.5c4.8 3.8 11.4 4.6 16.9 1.9s9.1-8.3 9.1-14.4l0-192c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48l0 192c0 6.2 3.5 11.8 9.1 14.4s12.1 1.9 16.9-1.9l70-56 70 56z" />
    </Icon>
);

export default CircleBookmark;