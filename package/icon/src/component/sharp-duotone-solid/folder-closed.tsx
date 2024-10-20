
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=sharp-duotone-solid folder-closed}
 * @preview ![folder-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-closed.svg)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 192l512 0 0-96L272 96 224 32 0 32z" />
        <path d="M0 192L0 480l512 0 0-288L0 192z" />
    </Icon>
);

export default FolderClosed;