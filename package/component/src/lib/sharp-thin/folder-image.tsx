
import { Icon } from "../../index";

/**
 * A component that renders the `folder-image` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-image?s=sharp-thin folder-image}
 * @preview ![folder-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-image.svg)
 */
const FolderImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 224 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm48 80l-8 0-4.8-6.4L216 48 16 48l0 416 480 0 0-352-224 0zM88 208a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm40 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm168-30.2l6.6 9.7 120 176 1.4 2 0 2.5 0 16 0 8-8 0L96 416l-8 0 0-8 0-16 0-2.7 1.6-2.1 72-96 6.1-8.1 6.5 7.8 33.2 39.9 82-119.3 6.6-9.6zm-.1 28.3L214.6 348.5l-6 8.7-6.8-8.1-33.5-40.2L104 394.7l0 5.3 304 0 0-5.5L296 230.2z" />
    </Icon>
);

export default FolderImage;