
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-user?s=sharp-duotone-solid folder-user}
 * @preview ![folder-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-user.svg)
 */
const FolderUser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM152 416l24-64 160 0 24 64-208 0zM320 256a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M256 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm104 96l-24-64-160 0-24 64 208 0z" />
    </Icon>
);

export default FolderUser;