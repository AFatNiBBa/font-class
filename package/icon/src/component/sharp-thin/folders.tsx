
import { Icon } from "../../index";

/**
 * A component that renders the `folders` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=sharp-thin folders}
 * @preview ![folders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folders.svg)
 */
const Folders: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 32l64 64 192 0 16 0 0 16 0 256 0 16-16 0-448 0-16 0 0-16L96 48l0-16 16 0 192 0zm64 80l-6.6 0-4.7-4.7L297.4 48 112 48l0 320 448 0 0-256-192 0zM16 128l48 0 0 16-48 0 0 320 448 0 0-48 16 0 0 48 0 16-16 0L16 480 0 480l0-16L0 144l0-16 16 0z" />
    </Icon>
);

export default Folders;