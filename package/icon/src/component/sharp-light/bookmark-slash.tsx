
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=sharp-light bookmark-slash}
 * @preview ![bookmark-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bookmark-slash.svg)
 */
const BookmarkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 32l0-32L480 0 160 0 128 0l0 22.9 32 25.3L160 32l320 0 0 268.8L512 326l0-294zM160 456.3l0-245.1L128 186l0 289 0 37 32-18.7L320 400l160 93.3L512 512l0-22.9-68.7-54.3L336.1 372.4 320 363l-16.1 9.4L160 456.3zM32.5 10L19.9 .1 .1 25.3l12.6 9.9L607.8 502.2l12.6 9.9 19.8-25.2-12.6-9.9L32.5 10z" />
    </Icon>
);

export default BookmarkSlash;