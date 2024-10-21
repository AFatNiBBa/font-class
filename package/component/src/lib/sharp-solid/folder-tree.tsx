
import { Icon } from "../../index";

/**
 * A component that renders the `folder-tree` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-tree?s=sharp-solid folder-tree}
 * @preview ![folder-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-tree.svg)
 */
const FolderTree: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32L64 0 0 0 0 32l0 96L0 416l0 32 32 0 224 0 0-64L64 384l0-224 192 0 0-64L64 96l0-64zM288 224l288 0 0-192L432 32 400 0 288 0l0 224zm0 288l288 0 0-192-144 0-32-32-112 0 0 224z" />
    </Icon>
);

export default FolderTree;