
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-image` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-image?s=sharp-duotone-solid folder-image}
 * @preview ![folder-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-image.svg)
 */
const FolderImage: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM96 376.5l6.1-6.8 64-72L184 277.5l17.9 20.2L219.1 317l57.3-81.2L296 208l19.6 27.8 96 136L416 378l0 7.6 0 8 0 24-24 0-120 0-24 0-48 0-24 0-56 0-24 0 0-24 0-8 0-9.1zM176 224a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M296 208l19.6 27.8 96 136L416 378l0 7.6 0 8 0 24-24 0-120 0-24 0-48 0-24 0-56 0-24 0 0-24 0-8 0-9.1 6.1-6.8 64-72L184 277.5l17.9 20.2L219.1 317l57.3-81.2L296 208z" />
    </Icon>
);

export default FolderImage;