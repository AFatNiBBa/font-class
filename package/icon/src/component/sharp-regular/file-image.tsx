
import { Icon } from "../../index";

/**
 * A component that renders the `file-image` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-image?s=sharp-regular file-image}
 * @preview ![file-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-image.svg)
 */
const FileImage: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l176 0 0 112 112 0 0 304L48 464 48 48zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM80 432l48 0 64 0 112 0 0-32L216 288l-57.7 73.5L136 336 80 400l0 32zm48-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default FileImage;