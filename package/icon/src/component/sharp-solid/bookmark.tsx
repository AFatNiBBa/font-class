
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=sharp-solid bookmark}
 * @preview ![bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bookmark.svg)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 512L192 400 384 512V0H0V512z" />
    </Icon>
);

export default Bookmark;