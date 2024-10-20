
import { Icon } from "../../index";

/**
 * A component that renders the `file-spreadsheet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-spreadsheet?s=sharp-regular file-spreadsheet}
 * @preview ![file-spreadsheet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-spreadsheet.svg)
 */
const FileSpreadsheet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l176 0 0 112 112 0 0 304L48 464 48 48zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM176 256l0 48-64 0 0-48 64 0zm-64 80l64 0 0 48-64 0 0-48zm96 0l64 0 0 48-64 0 0-48zm-16 80l16 0 64 0 32 0 0-32 0-48 0-16 0-16 0-48 0-32-32 0-64 0-16 0-16 0-64 0-32 0 0 32 0 48 0 16 0 16 0 48 0 32 32 0 64 0 16 0zm16-112l0-48 64 0 0 48-64 0z" />
    </Icon>
);

export default FileSpreadsheet;