
import { Icon } from "../../index";

/**
 * A component that renders the `folder-open` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-open?s=sharp-regular folder-open}
 * @preview ![folder-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folder-open.svg)
 */
const FolderOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M272 96L208 32 48 32 0 32 0 80 0 432l0 48 48 0 336 0 64 0L576 224l-448 0L48 384 48 80l140.1 0 49.9 49.9L252.1 144l19.9 0 160 0 0 48 48 0 0-48 0-48-48 0L272 96z" />
    </Icon>
);

export default FolderOpen;