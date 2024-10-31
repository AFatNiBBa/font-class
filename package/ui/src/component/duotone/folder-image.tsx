
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-image` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-image?s=duotone folder-image}
 * @preview ![folder-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folder-image.svg)
 */
const FolderImage: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L288 96c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32L64 32C28.7 32 0 60.7 0 96zM98.4 402.4c-4-8.3-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.5-9 18.7-9s14.2 3.3 18.7 9c5.8 7.2 11.5 14.4 17.3 21.6l56-84C280.5 228 288 224 296 224s15.5 4 20 10.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S400.9 416 392 416l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6zM176 224a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M296 224c8 0 15.5 4 20 10.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S400.9 416 392 416l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C280.5 228 288 224 296 224z" />
    </Icon>
);

export default FolderImage;