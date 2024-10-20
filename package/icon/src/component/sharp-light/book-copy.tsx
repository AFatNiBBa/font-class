
import { Icon } from "../../index";

/**
 * A component that renders the `book-copy` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-copy?s=sharp-light book-copy}
 * @preview ![book-copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/book-copy.svg)
 */
const BookCopy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 0L560 0l16 0 0 16 0 288 0 16-16 0-16 0 0 64 16 0 16 0 0 32-16 0-32 0-272 0c-35.3 0-64-28.7-64-64l0-288c0-35.3 28.7-64 64-64zM224 64l0 232.6c9.4-5.4 20.3-8.6 32-8.6l272 0 16 0 0-256L256 32c-17.7 0-32 14.3-32 32zm32 320l256 0 0-64-256 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zM64 96l96 0 0 32-96 0c-17.7 0-32 14.3-32 32l0 232.6c9.4-5.4 20.3-8.6 32-8.6l101.5 0c4.2 11.9 10.7 22.8 19 32L64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0 0-32 32 0 0 32 16 0 16 0 0 32-16 0-32 0L64 512c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64z" />
    </Icon>
);

export default BookCopy;