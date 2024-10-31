
import { Icon } from "../../index";

/**
 * A component that renders the `folder-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-xmark?s=sharp-thin folder-xmark}
 * @preview ![folder-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-xmark.svg)
 */
const FolderXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 224 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm48 80l-8 0-4.8-6.4L216 48 16 48l0 416 480 0 0-352-224 0zm-86.2 94.5l5.7 5.7L256 276.7l64.6-64.6 5.7-5.7 11.3 11.3-5.7 5.7L267.3 288l64.6 64.6 5.7 5.7-11.3 11.3-5.7-5.7L256 299.3l-64.6 64.6-5.7 5.7-11.3-11.3 5.7-5.7L244.7 288l-64.6-64.6-5.7-5.7 11.3-11.3z" />
    </Icon>
);

export default FolderXmark;