
import { Icon } from "../../index";

/**
 * A component that renders the `file-check` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-check?s=solid file-check}
 * @preview ![file-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/file-check.svg)
 */
const FileCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zm49 281L177 409c-9.4 9.4-24.6 9.4-33.9 0L79 345c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 247c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </Icon>
);

export default FileCheck;