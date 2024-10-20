
import { Icon } from "../../index";

/**
 * A component that renders the `file-export` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-export?s=sharp-regular file-export}
 * @preview ![file-export](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-export.svg)
 */
const FileExport: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 368l0 96L48 464 48 48l176 0 0 112 112 0 0 96 48 0 0-128L256 0 48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-96-48 0zM481 223l-17-17L430.1 240l17 17 31 31L216 288l-24 0 0 48 24 0 262.1 0-31 31-17 17L464 417.9l17-17 72-72 17-17-17-17-72-72z" />
    </Icon>
);

export default FileExport;