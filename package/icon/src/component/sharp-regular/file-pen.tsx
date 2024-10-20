
import { Icon } from "../../index";

/**
 * A component that renders the `file-pen` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pen?s=sharp-regular file-pen}
 * @preview ![file-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-pen.svg)
 */
const FilePen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 464l212.3 0-6.9 48L48 512 0 512l0-48L0 48 0 0 48 0 256 0 384 128l0 172.4-48 48L336 160l-112 0 0-112L48 48l0 416zM505 223.8l71 71-41.3 41.3-71-71L505 223.8zm-63.9 63.9l71 71L370.9 500 288 511.9 299.9 429 441.1 287.8z" />
    </Icon>
);

export default FilePen;