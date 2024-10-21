
import { Icon } from "../../index";

/**
 * A component that renders the `folder-plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-plus?s=sharp-light folder-plus}
 * @preview ![folder-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-plus.svg)
 */
const FolderPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 384 448 0 0-320-208 0zm0 64l0 16 0 64 64 0 16 0 0 32-16 0-64 0 0 64 0 16-32 0 0-16 0-64-64 0-16 0 0-32 16 0 64 0 0-64 0-16 32 0z" />
    </Icon>
);

export default FolderPlus;