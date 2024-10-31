
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=sharp-regular bookmark}
 * @preview ![bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bookmark.svg)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 344.4l24.2 14.1L336 428.4 336 48 48 48l0 380.4 119.8-69.9L192 344.4zM48 484L0 512l0-55.6L0 48 0 0 48 0 336 0l48 0 0 48 0 408.4 0 55.6-48-28L192 400 48 484z" />
    </Icon>
);

export default Bookmark;