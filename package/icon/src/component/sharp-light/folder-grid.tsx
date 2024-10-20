
import { Icon } from "../../index";

/**
 * A component that renders the `folder-grid` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-grid?s=sharp-light folder-grid}
 * @preview ![folder-grid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-grid.svg)
 */
const FolderGrid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 384 448 0 0-320-208 0zM112 272l0 32 32 0 0-32-32 0zM80 240l32 0 32 0 32 0 0 32 0 32 0 32-32 0-32 0-32 0 0-32 0-32 0-32zm160 64l32 0 0-32-32 0 0 32zm-32-64l32 0 32 0 32 0 0 32 0 32 0 32-32 0-32 0-32 0 0-32 0-32 0-32zm192 32l-32 0 0 32 32 0 0-32zm-32-32l32 0 32 0 0 32 0 32 0 32-32 0-32 0-32 0 0-32 0-32 0-32 32 0z" />
    </Icon>
);

export default FolderGrid;