
import { Icon } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=sharp-solid folder-bookmark}
 * @preview ![folder-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-bookmark.svg)
 */
const FolderBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480L0 480 0 32l224 0 48 64 240 0 0 384zM288 160l0 192 80-56 80 56 0-192-160 0z" />
    </Icon>
);

export default FolderBookmark;