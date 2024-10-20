
import { Icon } from "../../index";

/**
 * A component that renders the `book-bookmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-bookmark?s=regular book-bookmark}
 * @preview ![book-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/book-bookmark.svg)
 */
const BookBookmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 88C0 39.4 39.4 0 88 0L392 0c30.9 0 56 25.1 56 56l0 288c0 22.3-13.1 41.6-32 50.6l0 69.4 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L80 512c-44.2 0-80-35.8-80-80c0-2.7 .1-5.4 .4-8L0 424 0 88zM80 400c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0 0-64L80 400zM48 358.7c9.8-4.3 20.6-6.7 32-6.7l312 0c4.4 0 8-3.6 8-8l0-288c0-4.4-3.6-8-8-8l-40 0 0 158.7c0 13.4-15.5 20.9-26 12.5L272 176l-54 43.2c-10.5 8.4-26 .9-26-12.5L192 48 88 48C65.9 48 48 65.9 48 88l0 270.7z" />
    </Icon>
);

export default BookBookmark;