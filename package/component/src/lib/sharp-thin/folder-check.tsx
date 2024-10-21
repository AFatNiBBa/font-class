
import { Icon } from "../../index";

/**
 * A component that renders the `folder-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-check?s=sharp-thin folder-check}
 * @preview ![folder-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-check.svg)
 */
const FolderCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 224 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm48 80l-8 0-4.8-6.4L216 48 16 48l0 416 480 0 0-352-224 0zM229.7 357.7l-5.7 5.7-5.7-5.7-72-72 11.3-11.3L224 340.7 354.3 210.3l11.3 11.3-136 136z" />
    </Icon>
);

export default FolderCheck;