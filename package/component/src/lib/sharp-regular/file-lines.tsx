
import { Icon } from "../../index";

/**
 * A component that renders the `file-lines` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-lines?s=sharp-regular file-lines}
 * @preview ![file-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-lines.svg)
 */
const FileLines: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l176 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM120 256l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0zm0 96l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default FileLines;