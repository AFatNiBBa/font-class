
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-tree` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-tree?s=duotone folder-tree}
 * @preview ![folder-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folder-tree.svg)
 */
const FolderTree: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l0 96L0 384c0 35.3 28.7 64 64 64l224 0 0-64L64 384l0-224 224 0 0-64L64 96l0-64C64 14.3 49.7 0 32 0S0 14.3 0 32z" />
        <path d="M288 32l0 160c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-98.7 0c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4L320 0c-17.7 0-32 14.3-32 32zm0 288l0 160c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-98.7 0c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4L320 288c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default FolderTree;