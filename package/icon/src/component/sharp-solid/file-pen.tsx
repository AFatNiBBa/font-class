
import { Icon } from "../../index";

/**
 * A component that renders the `file-pen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pen?s=sharp-solid file-pen}
 * @preview ![file-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-pen.svg)
 */
const FilePen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L224 0l0 160 160 0 0 140.4-117 117L253.4 512 0 512 0 0zM384 128l-128 0L256 0 384 128zm121 95.8l71 71-41.3 41.3-71-71L505 223.8zm-63.9 63.9l71 71L370.9 500 288 511.9 299.9 429 441.1 287.8z" />
    </Icon>
);

export default FilePen;