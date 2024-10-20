
import { Icon } from "../../index";

/**
 * A component that renders the `file-vector` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-vector?s=sharp-light file-vector}
 * @preview ![file-vector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-vector.svg)
 */
const FileVector: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 480L32 480 32 32l160 0 0 144 0 16 16 0 144 0 0 288zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zm8 256l-96 0 0-32-64 0 0 64 32 0 0 96-32 0 0 64 64 0 0-32 96 0 0 32 64 0 0-64-32 0 0-96 32 0 0-64-64 0 0 32zm0 128l-96 0 0-96 96 0 0 96z" />
    </Icon>
);

export default FileVector;