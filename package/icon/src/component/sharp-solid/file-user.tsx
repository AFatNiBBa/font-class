
import { Icon } from "../../index";

/**
 * A component that renders the `file-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=sharp-solid file-user}
 * @preview ![file-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-user.svg)
 */
const FileUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM128 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 96l32 96L80 448l32-96 160 0z" />
    </Icon>
);

export default FileUser;