
import { Icon } from "../../index";

/**
 * A component that renders the `folder-grid` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-grid?s=sharp-regular folder-grid}
 * @preview ![folder-grid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folder-grid.svg)
 */
const FolderGrid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 192 0 48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 176 0zm48 112l-24 0-14.4-19.2L200 80 48 80l0 352 416 0 0-288-192 0zm-96 96l0 96-96 0 0-96 96 0zm32 0l96 0 0 96-96 0 0-96zm224 0l0 96-96 0 0-96 96 0z" />
    </Icon>
);

export default FolderGrid;