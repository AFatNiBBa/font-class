
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-tree` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-tree?s=sharp-duotone-solid folder-tree}
 * @preview ![folder-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-tree.svg)
 */
const FolderTree: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 32l0 96L0 416l0 32 32 0 256 0 0-64L64 384l0-224 224 0 0-64L64 96l0-64L64 0 0 0z" />
        <path d="M288 0l0 224 288 0 0-192L432 32 400 0 288 0zm0 288l0 224 288 0 0-192-144 0-32-32-112 0z" />
    </Icon>
);

export default FolderTree;