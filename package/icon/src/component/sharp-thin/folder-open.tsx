
import { Icon } from "../../index";

/**
 * A component that renders the `folder-open` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-open?s=sharp-thin folder-open}
 * @preview ![folder-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-open.svg)
 */
const FolderOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M272 96L208 32 16 32 0 32 0 48 0 464l0 16 16 0 1.9 0L384 480l64 0L568 240l8-16-17.9 0L128 224 16 448 16 48l185.4 0 59.3 59.3 4.7 4.7 6.6 0 192 0 0 80 16 0 0-80 0-16-16 0L272 96zM25.9 464l112-224 412.2 0-112 224L384 464 25.9 464z" />
    </Icon>
);

export default FolderOpen;