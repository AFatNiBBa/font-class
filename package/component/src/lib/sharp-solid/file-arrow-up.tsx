
import { Icon } from "../../index";

/**
 * A component that renders the `file-arrow-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-up?s=sharp-solid file-arrow-up}
 * @preview ![file-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-arrow-up.svg)
 */
const FileArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM216 408l0 24-48 0 0-24 0-102.1-31 31-17 17L86.1 320l17-17 72-72 17-17 17 17 72 72 17 17L264 353.9l-17-17-31-31L216 408z" />
    </Icon>
);

export default FileArrowUp;