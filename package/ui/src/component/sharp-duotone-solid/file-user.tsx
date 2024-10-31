
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=sharp-duotone-solid file-user}
 * @preview ![file-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-user.svg)
 */
const FileUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM80 448l224 0-32-96-160 0L80 448zm48-192a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M384 160L224 0l0 160 160 0zM256 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm16 96l-160 0L80 448l224 0-32-96z" />
    </Icon>
);

export default FileUser;