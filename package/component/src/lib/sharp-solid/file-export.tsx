
import { Icon } from "../../index";

/**
 * A component that renders the `file-export` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-export?s=sharp-solid file-export}
 * @preview ![file-export](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-export.svg)
 */
const FileExport: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L224 0l0 160 160 0 0 128-168 0-24 0 0 48 24 0 168 0 0 176L0 512 0 0zM384 336l0-48 110.1 0-39-39-17-17L472 198.1l17 17 80 80 17 17-17 17-80 80-17 17L438.1 392l17-17 39-39L384 336zm0-208l-128 0L256 0 384 128z" />
    </Icon>
);

export default FileExport;