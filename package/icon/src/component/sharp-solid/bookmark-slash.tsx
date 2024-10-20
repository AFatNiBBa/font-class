
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=sharp-solid bookmark-slash}
 * @preview ![bookmark-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bookmark-slash.svg)
 */
const BookmarkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 512l0-315.1L512 499.4l0 12.6L320 400 128 512zM512 374.7l108.9 84.6 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7L128 76.6 128 0 512 0l0 374.7z" />
    </Icon>
);

export default BookmarkSlash;