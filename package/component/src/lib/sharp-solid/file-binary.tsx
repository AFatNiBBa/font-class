
import { Icon } from "../../index";

/**
 * A component that renders the `file-binary` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-binary?s=sharp-solid file-binary}
 * @preview ![file-binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-binary.svg)
 */
const FileBinary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM80 256l96 0 16 0 0 16 0 128 0 16-16 0-96 0-16 0 0-16 0-128 0-16 16 0zM96 384l64 0 0-96-64 0 0 96zM240 256l32 0 16 0 0 16 0 112 16 0 16 0 0 32-16 0-32 0-32 0-16 0 0-32 16 0 16 0 0-96-16 0-16 0 0-32 16 0z" />
    </Icon>
);

export default FileBinary;