
import { Icon } from "../../index";

/**
 * A component that renders the `folder-tree` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-tree?s=thin folder-tree}
 * @preview ![folder-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/folder-tree.svg)
 */
const FolderTree: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8L0 128 0 384c0 22.1 17.9 40 40 40l216 0 0-16L40 408c-13.3 0-24-10.7-24-24l0-248 240 0 0-16L16 120 16 8zM304 32c0-8.8 7.2-16 16-16l74.7 0c4.2 0 8.3 1.7 11.3 4.7l21.7 21.7c3.6 3.6 8.5 5.6 13.6 5.6L544 48c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-160zm-16 0l0 160c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L441.3 32c-.8 0-1.7-.3-2.3-.9L417.4 9.4c-6-6-14.1-9.4-22.6-9.4L320 0c-17.7 0-32 14.3-32 32zm16 288c0-8.8 7.2-16 16-16l74.7 0c4.2 0 8.3 1.7 11.3 4.7l21.7 21.7c3.6 3.6 8.5 5.6 13.6 5.6L544 336c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-160zm-16 0l0 160c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-102.7 0c-.8 0-1.7-.3-2.3-.9l-21.7-21.7c-6-6-14.1-9.4-22.6-9.4L320 288c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default FolderTree;