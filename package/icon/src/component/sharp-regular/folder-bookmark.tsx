
import { Icon } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=sharp-regular folder-bookmark}
 * @preview ![folder-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folder-bookmark.svg)
 */
const FolderBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 192 0 48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 176 0zM416 144l0 176-80-56-80 56 0-176-8 0-14.4-19.2L200 80 48 80l0 352 416 0 0-288-48 0z" />
    </Icon>
);

export default FolderBookmark;