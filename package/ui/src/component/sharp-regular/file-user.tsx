
import { Icon } from "../../index";

/**
 * A component that renders the `file-user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=sharp-regular file-user}
 * @preview ![file-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-user.svg)
 */
const FileUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M298.7 464L272 384l-160 0L85.3 464 48 464 48 48l176 0 0 112 112 0 0 304-37.3 0zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zm0 288a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default FileUser;