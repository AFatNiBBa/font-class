
import { Icon } from "../../index";

/**
 * A component that renders the `folder-user` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-user?s=sharp-light folder-user}
 * @preview ![folder-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-user.svg)
 */
const FolderUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 384 448 0 0-320-208 0zM256 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM177.7 416L144 416l32-96 160 0 32 96-33.7 0-21.3-64-113.9 0-21.3 64z" />
    </Icon>
);

export default FolderUser;