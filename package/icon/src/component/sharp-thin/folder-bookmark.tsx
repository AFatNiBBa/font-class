
import { Icon } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=sharp-thin folder-bookmark}
 * @preview ![folder-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-bookmark.svg)
 */
const FolderBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 8 0 144 0 16 0 56 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm216 80l0 232 0 16.6-13-10.4-75-60-75 60-13 10.4 0-16.6 0-232-4.8-6.4L216 48 16 48l0 416 480 0 0-352-56 0zm-16 0l-144 0 0 215.4 67-53.6 5-4 5 4 67 53.6L424 112z" />
    </Icon>
);

export default FolderBookmark;