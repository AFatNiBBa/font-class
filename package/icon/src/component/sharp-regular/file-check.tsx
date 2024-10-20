
import { Icon } from "../../index";

/**
 * A component that renders the `file-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-check?s=sharp-regular file-check}
 * @preview ![file-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-check.svg)
 */
const FileCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l176 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zm33 267.6l17-17L272 216.7l-17 17-89.7 89.7L129 287l-17-17L78.1 304l17 17 53.3 53.3 17 17 17-17L289 267.6z" />
    </Icon>
);

export default FileCheck;