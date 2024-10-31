
import { Icon } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=regular folder-bookmark}
 * @preview ![folder-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/folder-bookmark.svg)
 */
const FolderBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M251.7 127.6s0 0 0 0c1.4 1.4 2.8 2.7 4.3 3.9L256 304c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L336 276l54.4 40.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.3 8.8-14.3l0-160 32 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l33.9-33.9L208.8 84.7l42.9 42.9zm33.9-33.9L242.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L291.3 96c-2.1 0-4.2-.8-5.7-2.3z" />
    </Icon>
);

export default FolderBookmark;