
import { Icon } from "../../index";

/**
 * A component that renders the `file-user` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=sharp-thin file-user}
 * @preview ![file-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-user.svg)
 */
const FileUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496 16 16zm208 6.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zM192 224a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-68.5 48l136.9 0 21.3 64-179.6 0 21.3-64zM272 368l-160 0L85.3 448 80 464l16.9 0 190.3 0 16.9 0-5.3-16L272 368z" />
    </Icon>
);

export default FileUser;