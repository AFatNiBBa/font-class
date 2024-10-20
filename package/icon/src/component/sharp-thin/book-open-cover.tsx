
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-cover` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-cover?s=sharp-thin book-open-cover}
 * @preview ![book-open-cover](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/book-open-cover.svg)
 */
const BookOpenCover: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 386.9l232 46.4 0-383L80 18.4l0 368.5zm248 46.4l232-46.4 0-368.5L328 50.3l0 383zM320 35.2l240-33L576 0l0 16.2L576 400 320 451.2 64 400 64 16.2 64 0 80 2.2l240 33zM16 31l16 2.2 0 16.2L16 47.2l0 384.5 304 60.8 304-60.8 0-384.5-16 2.2 0-16.2L624 31l16-2.2L640 45l0 399.8-320 64L0 444.8 0 45 0 28.8 16 31z" />
    </Icon>
);

export default BookOpenCover;