
import { Icon } from "../../index";

/**
 * A component that renders the `file-arrow-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-down?s=sharp-regular file-arrow-down}
 * @preview ![file-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-arrow-down.svg)
 */
const FileArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l176 0 0 112 112 0 0 304L48 464 48 48zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM216 232l0-24-48 0 0 24 0 102.1-31-31-17-17L86.1 320l17 17 72 72 17 17 17-17 72-72 17-17L264 286.1l-17 17-31 31L216 232z" />
    </Icon>
);

export default FileArrowDown;