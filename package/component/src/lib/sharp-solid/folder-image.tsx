
import { Icon } from "../../index";

/**
 * A component that renders the `folder-image` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-image?s=sharp-solid folder-image}
 * @preview ![folder-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-image.svg)
 */
const FolderImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480L0 480 0 32l224 0 48 64 240 0 0 384zM176 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm120-16l-19.6 27.8L219.1 317l-17.1-19.3L184 277.5l-17.9 20.2-64 72L96 376.5l0 9.1 0 8 0 24 24 0 56 0 24 0 48 0 24 0 120 0 24 0 0-24 0-8 0-7.6-4.4-6.2-96-136L296 208z" />
    </Icon>
);

export default FolderImage;