
import { Icon } from "../../index";

/**
 * A component that renders the `folder-grid` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-grid?s=sharp-solid folder-grid}
 * @preview ![folder-grid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-grid.svg)
 */
const FolderGrid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480L0 480 0 32l224 0 48 64 240 0 0 384zM176 240l-96 0 0 96 96 0 0-96zm128 0l-96 0 0 96 96 0 0-96zm32 0l0 96 96 0 0-96-96 0z" />
    </Icon>
);

export default FolderGrid;