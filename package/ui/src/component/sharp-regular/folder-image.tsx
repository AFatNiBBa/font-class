
import { Icon } from "../../index";

/**
 * A component that renders the `folder-image` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-image?s=sharp-regular folder-image}
 * @preview ![folder-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folder-image.svg)
 */
const FolderImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 192 0 48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 176 0zm48 112l-24 0-14.4-19.2L200 80 48 80l0 352 416 0 0-288-192 0zM128 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 384l0-32 88-96 37.7 41.1L296 208 416 352l0 32-144 0-96 0-80 0z" />
    </Icon>
);

export default FolderImage;