
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=sharp-duotone-solid bookmark}
 * @preview ![bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bookmark.svg)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 0l0 352 96-64 96 64L288 0 96 0z" />
        <path d="M384 0l0 512L192 400 0 512 0 0 96 0l0 352 96-64 96 64L288 0l96 0z" />
    </Icon>
);

export default Bookmark;