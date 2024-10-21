
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=duotone folder-bookmark}
 * @preview ![folder-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folder-bookmark.svg)
 */
const FolderBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l0 240c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L368 308l-54.4 40.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-240c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32L64 32C28.7 32 0 60.7 0 96z" />
        <path d="M288 96l0 240c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L368 308l54.4 40.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.2 8.8-14.3l0-240L288 96z" />
    </Icon>
);

export default FolderBookmark;