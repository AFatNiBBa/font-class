
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bookmark` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bookmark?s=solid circle-bookmark}
 * @preview ![circle-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-bookmark.svg)
 */
const CircleBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 176c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 192c0 6.2-3.5 11.8-9.1 14.4s-12.1 1.9-16.9-1.9l-70-56-70 56c-4.8 3.8-11.4 4.6-16.9 1.9s-9.1-8.3-9.1-14.4l0-192z" />
    </Icon>
);

export default CircleBookmark;