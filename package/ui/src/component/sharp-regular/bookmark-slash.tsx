
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=sharp-regular bookmark-slash}
 * @preview ![bookmark-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bookmark-slash.svg)
 */
const BookmarkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 374.7l108.9 84.6 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7L128 76.6 128 48l0-48 48 0L464 0l48 0 0 48 0 326.7zM176 113.9L464 337.5 464 48 176 48l0 65.9zM512 499.4l0 12.6-48-28L320 400 176 484l-48 28 0-55.6 0-259.6 48 37.8 0 193.8 119.8-69.9L317.3 346 512 499.4z" />
    </Icon>
);

export default BookmarkSlash;