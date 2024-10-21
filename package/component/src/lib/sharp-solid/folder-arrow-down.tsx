
import { Icon } from "../../index";

/**
 * A component that renders the `folder-arrow-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-down?s=sharp-solid folder-arrow-down}
 * @preview ![folder-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-arrow-down.svg)
 */
const FolderArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 96l0 384L0 480 0 32l224 0 48 64 240 0zM280 200l0-24-48 0 0 24 0 102.1-31-31-17-17L150.1 288l17 17 72 72 17 17 17-17 72-72 17-17L328 254.1l-17 17-31 31L280 200z" />
    </Icon>
);

export default FolderArrowDown;