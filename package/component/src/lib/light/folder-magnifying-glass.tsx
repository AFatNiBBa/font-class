
import { Icon } from "../../index";

/**
 * A component that renders the `folder-magnifying-glass` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-magnifying-glass?s=light folder-magnifying-glass}
 * @preview ![folder-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/folder-magnifying-glass.svg)
 */
const FolderMagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 96c0-17.7 14.3-32 32-32l124.1 0c8.5 0 16.6 3.4 22.6 9.4l35.9 35.9c12 12 28.3 18.7 45.3 18.7L448 128c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L291.9 96c-8.5 0-16.6-3.4-22.6-9.4L233.4 50.7c-12-12-28.3-18.7-45.3-18.7L64 32zM240 208a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160c20.7 0 39.9-6.6 55.6-17.7l45.1 45.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-45.1-45.1C329.4 311.9 336 292.7 336 272c0-53-43-96-96-96s-96 43-96 96s43 96 96 96z" />
    </Icon>
);

export default FolderMagnifyingGlass;