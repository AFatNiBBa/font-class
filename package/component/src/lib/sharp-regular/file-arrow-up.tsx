
import { Icon } from "../../index";

/**
 * A component that renders the `file-arrow-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-up?s=sharp-regular file-arrow-up}
 * @preview ![file-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-arrow-up.svg)
 */
const FileArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l176 0 0 112 112 0 0 304L48 464 48 48zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM216 408l0-102.1 31 31 17 17L297.9 320l-17-17-72-72-17-17-17 17-72 72-17 17L120 353.9l17-17 31-31L168 408l0 24 48 0 0-24z" />
    </Icon>
);

export default FileArrowUp;