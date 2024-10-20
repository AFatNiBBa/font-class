
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=duotone folder-closed}
 * @preview ![folder-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folder-closed.svg)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 96 512 0 0-32c0-35.3-28.7-64-64-64L288 96c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32L64 32C28.7 32 0 60.7 0 96z" />
        <path d="M0 192L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224L0 192z" />
    </Icon>
);

export default FolderClosed;