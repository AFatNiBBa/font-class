
import { Icon } from "../../index";

/**
 * A component that renders the `file-export` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-export?s=solid file-export}
 * @preview ![file-export](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/file-export.svg)
 */
const FileExport: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 128-168 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l168 0 0 112c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM384 336l0-48 110.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L384 336zm0-208l-128 0L256 0 384 128z" />
    </Icon>
);

export default FileExport;