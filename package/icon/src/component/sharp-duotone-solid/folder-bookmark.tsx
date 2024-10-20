
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=sharp-duotone-solid folder-bookmark}
 * @preview ![folder-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-bookmark.svg)
 */
const FolderBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384-64 0 0 256-80-56-80 56 0-256-16 0L224 32 0 32z" />
        <path d="M288 352V96H448V352l-80-56-80 56z" />
    </Icon>
);

export default FolderBookmark;