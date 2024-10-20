
import { Icon } from "../../index";

/**
 * A component that renders the `folder-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-xmark?s=sharp-regular folder-xmark}
 * @preview ![folder-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folder-xmark.svg)
 */
const FolderXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 192 0 48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 176 0zm48 112l-24 0-14.4-19.2L200 80 48 80l0 352 416 0 0-288-192 0zm81.9 80l-17 17-47 47 47 47 17 17L320 385.9l-17-17-47-47-47 47-17 17L158.1 352l17-17 47-47-47-47-17-17L192 190.1l17 17 47 47 47-47 17-17L353.9 224z" />
    </Icon>
);

export default FolderXmark;