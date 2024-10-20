
import { Icon } from "../../index";

/**
 * A component that renders the `folder-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-user?s=sharp-solid folder-user}
 * @preview ![folder-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-user.svg)
 */
const FolderUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 96l0 384L0 480 0 32l224 0 48 64 240 0zM320 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm16 96l-160 0-24 64 208 0-24-64z" />
    </Icon>
);

export default FolderUser;