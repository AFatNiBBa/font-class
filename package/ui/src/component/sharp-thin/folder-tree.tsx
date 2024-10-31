
import { Icon } from "../../index";

/**
 * A component that renders the `folder-tree` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-tree?s=sharp-thin folder-tree}
 * @preview ![folder-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-tree.svg)
 */
const FolderTree: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L0 128 0 416l0 8 8 0 248 0 0-16L16 408l0-272 240 0 0-16L16 120 16 0 0 0zM433.4 48l6.6 0 120 0 0 160-256 0 0-192 97.4 0 27.3 27.3 4.7 4.7zM560 32L440 32 408 0 304 0 288 0l0 16 0 192 0 16 16 0 256 0 16 0 0-16 0-160 0-16-16 0zM433.4 336l6.6 0 120 0 0 160-256 0 0-192 97.4 0 27.3 27.3 4.7 4.7zM560 320l-120 0-32-32-104 0-16 0 0 16 0 192 0 16 16 0 256 0 16 0 0-16 0-160 0-16-16 0z" />
    </Icon>
);

export default FolderTree;