
import { Icon } from "../../index";

/**
 * A component that renders the `folder-grid` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-grid?s=sharp-thin folder-grid}
 * @preview ![folder-grid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-grid.svg)
 */
const FolderGrid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 224 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm48 80l-8 0-4.8-6.4L216 48 16 48l0 416 480 0 0-352-224 0zM96 256l0 64 64 0 0-64-64 0zM80 240l16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16zm144 16l0 64 64 0 0-64-64 0zm-16-16l16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16zm208 16l-64 0 0 64 64 0 0-64zm-64-16l64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16 16 0z" />
    </Icon>
);

export default FolderGrid;