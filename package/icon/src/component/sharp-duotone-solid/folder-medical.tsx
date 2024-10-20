
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-medical?s=sharp-duotone-solid folder-medical}
 * @preview ![folder-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-medical.svg)
 */
const FolderMedical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM160 256l64 0 0-64 64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64z" />
        <path d="M288 192l-64 0 0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64z" />
    </Icon>
);

export default FolderMedical;