
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=sharp-light folder}
 * @preview ![folder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder.svg)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 96L224 32 32 32 0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-32 0-320 0-32-32 0L272 96zm208 32l0 320L32 448 32 64l176 0 38.4 51.2L256 128l16 0 208 0z" />
    </Icon>
);

export default Folder;