
import { Icon } from "../../index";

/**
 * A component that renders the `folders` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=sharp-light folders}
 * @preview ![folders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folders.svg)
 */
const Folders: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 32L128 32 96 32l0 32 0 288 0 32 32 0 416 0 32 0 0-32 0-224 0-32-32 0L368 96 304 32zm64 96l176 0 0 224-416 0 0-288 162.7 0 54.6 54.6 9.4 9.4 13.3 0zM32 112l0-16L0 96l0 16L0 464l0 16 16 0 448 0 16 0 0-32-16 0L32 448l0-336z" />
    </Icon>
);

export default Folders;