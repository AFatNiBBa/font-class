
import { Icon } from "../../index";

/**
 * A component that renders the `book-bookmark` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-bookmark?s=light book-bookmark}
 * @preview ![book-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book-bookmark.svg)
 */
const BookBookmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L176 0 336 0l64 0c26.5 0 48 21.5 48 48l0 320c0 20.9-13.4 38.7-32 45.3l0 66.7 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0L0 64zM320 32L192 32l0 174.7 54-43.2c5.8-4.7 14.1-4.7 20 0l54 43.2L320 32zM160 32L64 32C46.3 32 32 46.3 32 64l0 328.6c9.4-5.4 20.3-8.6 32-8.6l336 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-48 0 0 208c0 6.2-3.5 11.8-9.1 14.4s-12.1 1.9-16.9-1.9l-70-56-70 56c-4.8 3.8-11.4 4.6-16.9 1.9s-9.1-8.3-9.1-14.4l0-208zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0 0-64L64 416z" />
    </Icon>
);

export default BookBookmark;