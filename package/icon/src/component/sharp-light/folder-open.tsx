
import { Icon } from "../../index";

/**
 * A component that renders the `folder-open` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-open?s=sharp-light folder-open}
 * @preview ![folder-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-open.svg)
 */
const FolderOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M272 96L208 32 32 32 0 32 0 64 0 448l0 32 32 0 3.8 0L384 480l64 0L560 256l16-32-35.8 0L128 224 32 416 32 64l162.7 0 54.6 54.6 9.4 9.4 13.3 0 176 0 0 64 32 0 0-64 0-32-32 0L272 96zM51.8 448l96-192 376.4 0-96 192L384 448 51.8 448z" />
    </Icon>
);

export default FolderOpen;