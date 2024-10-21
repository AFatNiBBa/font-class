
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=sharp-solid folder}
 * @preview ![folder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder.svg)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 480H512V96H272L224 32H0V480z" />
    </Icon>
);

export default Folder;