
import { Icon } from "../../index";

/**
 * A component that renders the `folder-image` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-image?s=solid folder-image}
 * @preview ![folder-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/folder-image.svg)
 */
const FolderImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 480L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l128 0c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8l160 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64zM176 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm120 0c-8 0-15.5 4-20 10.7l-56 84L202.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l80 0 48 0 144 0c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144C311.5 228 304 224 296 224z" />
    </Icon>
);

export default FolderImage;