
import { Icon } from "../../index";

/**
 * A component that renders the `file-import` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-import?s=sharp-regular file-import}
 * @preview ![file-import](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-import.svg)
 */
const FileImport: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 464l-288 0 0-96-48 0 0 96 0 48 48 0 288 0 48 0 0-48 0-336L384 0 176 0 128 0l0 48 0 208 48 0 0-208 176 0 0 112 112 0 0 304zM297 215l-17-17L246.1 232l17 17 39 39L24 288 0 288l0 48 24 0 278.1 0-39 39-17 17L280 425.9l17-17 80-80 17-17-17-17-80-80z" />
    </Icon>
);

export default FileImport;