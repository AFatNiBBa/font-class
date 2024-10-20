
import { Icon } from "../../index";

/**
 * A component that renders the `folder-arrow-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-up?s=sharp-thin folder-arrow-up}
 * @preview ![folder-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-arrow-up.svg)
 */
const FolderArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 224 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm48 80l-8 0-4.8-6.4L216 48 16 48l0 416 480 0 0-352-224 0zm-8 280l0 8-16 0 0-8 0-188.7-74.3 74.3-5.7 5.7L156.7 272l5.7-5.7 88-88 5.7-5.7 5.7 5.7 88 88 5.7 5.7L344 283.3l-5.7-5.7L264 203.3 264 392z" />
    </Icon>
);

export default FolderArrowUp;