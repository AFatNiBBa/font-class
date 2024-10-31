
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=sharp-regular folder}
 * @preview ![folder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/folder.svg)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 96L224 32 48 32 0 32 0 80 0 432l0 48 48 0 416 0 48 0 0-48 0-288 0-48-48 0L272 96zm192 48l0 288L48 432 48 80l152 0 33.6 44.8L248 144l24 0 192 0z" />
    </Icon>
);

export default Folder;