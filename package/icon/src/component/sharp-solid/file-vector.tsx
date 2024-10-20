
import { Icon } from "../../index";

/**
 * A component that renders the `file-vector` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-vector?s=sharp-solid file-vector}
 * @preview ![file-vector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-vector.svg)
 */
const FileVector: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM128 192l0 32 128 0 0-32 64 0 0 64-32 0 0 128 32 0 0 64-64 0 0-32-128 0 0 32-64 0 0-64 32 0 0-128-32 0 0-64 64 0zm128 64l-128 0 0 128 128 0 0-128z" />
    </Icon>
);

export default FileVector;