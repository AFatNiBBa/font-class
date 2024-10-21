
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=sharp-thin bookmark}
 * @preview ![bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bookmark.svg)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 381.5l8.1 4.7 167.9 98L368 16 16 16l0 468.1 167.9-98 8.1-4.7zM16 502.7L0 512l0-18.5L0 16 0 0 16 0 368 0l16 0 0 16 0 477.5 0 18.5-16-9.3L192 400 16 502.7z" />
    </Icon>
);

export default Bookmark;