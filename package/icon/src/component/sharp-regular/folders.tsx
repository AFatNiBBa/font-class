
import { Icon } from "../../index";

/**
 * A component that renders the `folders` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=sharp-regular folders}
 * @preview ![folders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folders.svg)
 */
const Folders: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 32L144 32 96 32l0 48 0 256 0 48 48 0 384 0 48 0 0-48 0-192 0-48-48 0L368 96 304 32zm64 112l160 0 0 192-384 0 0-256 140.1 0 49.9 49.9L348.1 144l19.9 0zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default Folders;