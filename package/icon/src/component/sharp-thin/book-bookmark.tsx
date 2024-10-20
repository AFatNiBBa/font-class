
import { Icon } from "../../index";

/**
 * A component that renders the `book-bookmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-bookmark?s=sharp-thin book-bookmark}
 * @preview ![book-bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/book-bookmark.svg)
 */
const BookBookmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56C0 25.1 25.1 0 56 0L160 0l8 0L344 0l8 0 88 0 8 0 0 8 0 400 0 8-8 0-24 0 0 80 24 0 8 0 0 16-8 0L56 512c-30.9 0-56-25.1-56-56L0 56zM336 16L176 16l0 215.1 74.9-61.3 5.1-4.1 5.1 4.1L336 231.1 336 16zM160 16L56 16C33.9 16 16 33.9 16 56l0 360.8C26.2 406.4 40.3 400 56 400l376 0 0-384-80 0 0 232 0 16.9-13.1-10.7L256 186.3l-82.9 67.9L160 264.9l0-16.9 0-232zM56 416c-22.1 0-40 17.9-40 40s17.9 40 40 40l344 0 0-80L56 416z" />
    </Icon>
);

export default BookBookmark;