
import { Icon } from "../../index";

/**
 * A component that renders the `folder-tree` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-tree?s=light folder-tree}
 * @preview ![folder-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/folder-tree.svg)
 */
const FolderTree: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 16C32 7.2 24.8 0 16 0S0 7.2 0 16l0 96L0 368c0 26.5 21.5 48 48 48l208 0 0-32L48 384c-8.8 0-16-7.2-16-16l0-240 224 0 0-32L32 96l0-80zM394.7 32l21.7 21.7C423 60.3 432 64 441.3 64L544 64l0 128-224 0 0-160 74.7 0zM288 32l0 160c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L441.3 32c-.8 0-1.7-.3-2.3-.9L417.4 9.4c-6-6-14.1-9.4-22.6-9.4L320 0c-17.7 0-32 14.3-32 32zm32 288l74.7 0 21.7 21.7C423 348.3 432 352 441.3 352L544 352l0 128-224 0 0-160zm-32 0l0 160c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-102.7 0c-.8 0-1.7-.3-2.3-.9l-21.7-21.7c-6-6-14.1-9.4-22.6-9.4L320 288c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default FolderTree;