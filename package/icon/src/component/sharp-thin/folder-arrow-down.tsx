
import { Icon } from "../../index";

/**
 * A component that renders the `folder-arrow-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-down?s=sharp-thin folder-arrow-down}
 * @preview ![folder-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-arrow-down.svg)
 */
const FolderArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 224 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm48 80l-8 0-4.8-6.4L216 48 16 48l0 416 480 0 0-352-224 0zm-8 72l0 188.7 74.3-74.3 5.7-5.7L355.3 304l-5.7 5.7-88 88-5.7 5.7-5.7-5.7-88-88-5.7-5.7L168 292.7l5.7 5.7L248 372.7 248 184l0-8 16 0 0 8z" />
    </Icon>
);

export default FolderArrowDown;