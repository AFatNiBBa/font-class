
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=sharp-duotone-solid folder}
 * @preview ![folder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder.svg)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480H512V96H272L224 32H0V480z" />
    </Icon>
);

export default Folder;