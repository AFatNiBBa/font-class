
import { Icon } from "../../index";

/**
 * A component that renders the `folder-user` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-user?s=light folder-user}
 * @preview ![folder-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/folder-user.svg)
 */
const FolderUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 96c0-17.7 14.3-32 32-32l124.1 0c8.5 0 16.6 3.4 22.6 9.4l35.9 35.9c12 12 28.3 18.7 45.3 18.7L448 128c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L291.9 96c-8.5 0-16.6-3.4-22.6-9.4L233.4 50.7c-12-12-28.3-18.7-45.3-18.7L64 32zM256 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 64l64 0c26.5 0 48 21.5 48 48c0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default FolderUser;