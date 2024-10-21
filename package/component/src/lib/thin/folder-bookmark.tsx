
import { Icon } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=thin folder-bookmark}
 * @preview ![folder-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/folder-bookmark.svg)
 */
const FolderBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 464c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48l-8 0 0 232c0 3.1-1.8 5.9-4.5 7.2s-6.1 1-8.5-1l-75-60-75 60c-2.4 1.9-5.7 2.3-8.5 1s-4.5-4.1-4.5-7.2l0-248c0-.4 0-.9 .1-1.3L231.4 62.1c-9-9-21.2-14.1-33.9-14.1L64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l384 0zM424 112l-122.7 0c-7.4 0-14.7-1.7-21.3-5l0 220.3 67-53.6c2.9-2.3 7.1-2.3 10 0l67 53.6L424 112zm8-16l16 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l133.5 0c17 0 33.3 6.7 45.3 18.7l35.9 35.9c6 6 14.1 9.4 22.6 9.4L432 96z" />
    </Icon>
);

export default FolderBookmark;