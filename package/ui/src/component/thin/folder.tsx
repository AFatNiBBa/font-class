
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=thin folder}
 * @preview ![folder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/folder.svg)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 464l384 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48l-146.7 0c-12.7 0-24.9-5.1-33.9-14.1L231.4 62.1c-9-9-21.2-14.1-33.9-14.1L64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48zm384 16L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l133.5 0c17 0 33.3 6.7 45.3 18.7l35.9 35.9c6 6 14.1 9.4 22.6 9.4L448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default Folder;