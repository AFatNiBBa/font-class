
import { Icon } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=sharp-light folder-closed}
 * @preview ![folder-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-closed.svg)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 128 448 0 0-64-208 0zM32 224l0 224 448 0 0-224L32 224z" />
    </Icon>
);

export default FolderClosed;