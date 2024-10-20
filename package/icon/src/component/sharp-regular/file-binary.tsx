
import { Icon } from "../../index";

/**
 * A component that renders the `file-binary` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-binary?s=sharp-regular file-binary}
 * @preview ![file-binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-binary.svg)
 */
const FileBinary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l176 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM96 240l-24 0 0 24 0 128 0 24 24 0 80 0 24 0 0-24 0-128 0-24-24 0-80 0zm24 128l0-80 32 0 0 80-32 0zM240 240l-24 0 0 48 24 0 0 80-24 0 0 48 24 0 24 0 24 0 24 0 0-48-24 0 0-104 0-24-24 0-24 0z" />
    </Icon>
);

export default FileBinary;