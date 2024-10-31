
import { Icon } from "../../index";

/**
 * A component that renders the `folder-open` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-open?s=sharp-solid folder-open}
 * @preview ![folder-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-open.svg)
 */
const FolderOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M99.4 209.7L0 408.4 0 32l208 0 64 64 208 0 0 96-352 0-19.8 0-8.8 17.7zM0 480L128 224l448 0L448 480 0 480z" />
    </Icon>
);

export default FolderOpen;