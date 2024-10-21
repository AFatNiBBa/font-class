
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-open?s=sharp-duotone-solid folder-open}
 * @preview ![folder-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-open.svg)
 */
const FolderOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480 128 224l352 0 0-128L272 96 208 32 0 32z" />
        <path d="M128 224L0 480H448L576 224H128z" />
    </Icon>
);

export default FolderOpen;