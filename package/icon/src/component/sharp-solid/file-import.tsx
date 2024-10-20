
import { Icon } from "../../index";

/**
 * A component that renders the `file-import` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-import?s=sharp-solid file-import}
 * @preview ![file-import](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-import.svg)
 */
const FileImport: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0L352 0l0 160 160 0 0 352-384 0 0-176 174.1 0-39 39-17 17L280 425.9l17-17 80-80 17-17-17-17-80-80-17-17L246.1 232l17 17 39 39L128 288 128 0zm0 288l0 48L24 336 0 336l0-48 24 0 104 0zM512 128l-128 0L384 0 512 128z" />
    </Icon>
);

export default FileImport;