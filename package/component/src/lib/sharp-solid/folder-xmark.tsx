
import { Icon } from "../../index";

/**
 * A component that renders the `folder-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-xmark?s=sharp-solid folder-xmark}
 * @preview ![folder-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-xmark.svg)
 */
const FolderXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480L0 480 0 32l224 0 48 64 240 0 0 384zM353.9 224L320 190.1l-17 17-47 47-47-47-17-17L158.1 224l17 17 47 47-47 47-17 17L192 385.9l17-17 47-47 47 47 17 17L353.9 352l-17-17-47-47 47-47 17-17z" />
    </Icon>
);

export default FolderXmark;