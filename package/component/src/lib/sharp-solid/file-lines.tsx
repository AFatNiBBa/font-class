
import { Icon } from "../../index";

/**
 * A component that renders the `file-lines` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-lines?s=sharp-solid file-lines}
 * @preview ![file-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-lines.svg)
 */
const FileLines: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM112 256l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm0 64l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm0 64l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0z" />
    </Icon>
);

export default FileLines;