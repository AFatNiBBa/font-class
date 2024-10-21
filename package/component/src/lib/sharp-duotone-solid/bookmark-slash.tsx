
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=sharp-duotone-solid bookmark-slash}
 * @preview ![bookmark-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bookmark-slash.svg)
 */
const BookmarkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 0l0 76.6C256 176 384 275.4 512 374.7L512 0 128 0zm0 196.8L128 512 320 400 512 512l0-12.6L128 196.8z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default BookmarkSlash;