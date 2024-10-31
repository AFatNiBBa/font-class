
import { Icon } from "../../index";

/**
 * A component that renders the `file-image` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-image?s=sharp-solid file-image}
 * @preview ![file-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-image.svg)
 */
const FileImage: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM96 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM320 448l-128 0-64 0-64 0 0-32 64-88 32.5 44.7L224 288l96 128 0 32z" />
    </Icon>
);

export default FileImage;