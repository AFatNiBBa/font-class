
import { Icon } from "../../index";

/**
 * A component that renders the `file-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-xmark?s=sharp-regular file-xmark}
 * @preview ![file-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-xmark.svg)
 */
const FileXmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l176 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zm33.9 256L256 222.1l-17 17-47 47-47-47-17-17L94.1 256l17 17 47 47-47 47-17 17L128 417.9l17-17 47-47 47 47 17 17L289.9 384l-17-17-47-47 47-47 17-17z" />
    </Icon>
);

export default FileXmark;