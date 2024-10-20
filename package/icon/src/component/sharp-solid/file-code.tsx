
import { Icon } from "../../index";

/**
 * A component that renders the `file-code` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-code?s=sharp-solid file-code}
 * @preview ![file-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-code.svg)
 */
const FileCode: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM153 289l-31 31 31 31 17 17L136 401.9l-17-17L71 337l-17-17 17-17 48-48 17-17L169.9 272l-17 17zM265 255l48 48 17 17-17 17-48 48-17 17L214.1 368l17-17 31-31-31-31-17-17L248 238.1l17 17z" />
    </Icon>
);

export default FileCode;