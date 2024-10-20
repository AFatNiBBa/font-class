
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-minus?s=sharp-duotone-solid folder-minus}
 * @preview ![folder-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-minus.svg)
 */
const FolderMinus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM160 272l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
        <path d="M160 272l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
    </Icon>
);

export default FolderMinus;