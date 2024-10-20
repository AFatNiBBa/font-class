
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=sharp-thin folder}
 * @preview ![folder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder.svg)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 96L224 32 16 32 0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-16 0-352 0-16-16 0L272 96zm224 16l0 352L16 464 16 48l200 0 43.2 57.6L264 112l8 0 224 0z" />
    </Icon>
);

export default Folder;