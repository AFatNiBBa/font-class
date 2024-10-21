
import { Icon } from "../../index";

/**
 * A component that renders the `folder-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-minus?s=sharp-thin folder-minus}
 * @preview ![folder-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-minus.svg)
 */
const FolderMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 224 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm48 80l-8 0-4.8-6.4L216 48 16 48l0 416 480 0 0-352-224 0zM152 304l0-16 208 0 0 16-208 0z" />
    </Icon>
);

export default FolderMinus;