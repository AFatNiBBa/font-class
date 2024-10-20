
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=sharp-light bookmark}
 * @preview ![bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bookmark.svg)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 363l16.1 9.4L352 456.3 352 32 32 32l0 424.3 143.9-83.9L192 363zM32 493.3L0 512l0-37L0 32 0 0 32 0 352 0l32 0 0 32 0 443 0 37-32-18.7L192 400 32 493.3z" />
    </Icon>
);

export default Bookmark;