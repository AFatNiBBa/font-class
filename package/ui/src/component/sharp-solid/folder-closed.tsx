
import { Icon } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=sharp-solid folder-closed}
 * @preview ![folder-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-closed.svg)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480L0 480 0 192l512 0 0 288zm0-320L0 160 0 32l224 0 48 64 240 0 0 64z" />
    </Icon>
);

export default FolderClosed;