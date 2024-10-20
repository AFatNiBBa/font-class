
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-grid` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-grid?s=sharp-duotone-solid folder-grid}
 * @preview ![folder-grid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-grid.svg)
 */
const FolderGrid: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM80 240l96 0 0 96-96 0 0-96zm128 0l96 0 0 96-96 0 0-96zm128 0l96 0 0 96-96 0 0-96z" />
        <path d="M80 240l96 0 0 96-96 0 0-96zm128 0l96 0 0 96-96 0 0-96zm224 0l0 96-96 0 0-96 96 0z" />
    </Icon>
);

export default FolderGrid;