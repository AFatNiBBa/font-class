
import { Icon } from "../../index";

/**
 * A component that renders the `file-vector` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-vector?s=sharp-regular file-vector}
 * @preview ![file-vector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-vector.svg)
 */
const FileVector: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l176 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM240 224l-96 0 0-16-64 0 0 64 16 0 0 96-16 0 0 64 64 0 0-16 96 0 0 16 64 0 0-64-16 0 0-96 16 0 0-64-64 0 0 16zm0 144l-96 0 0-96 96 0 0 96z" />
    </Icon>
);

export default FileVector;