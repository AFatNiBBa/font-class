
import { Icon } from "../../index";

/**
 * A component that renders the `book-font` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-font?s=sharp-thin book-font}
 * @preview ![book-font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/book-font.svg)
 */
const BookFont: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56C0 25.1 25.1 0 56 0L440 0l8 0 0 8 0 400 0 8-8 0-24 0 0 80 24 0 8 0 0 16-8 0L56 512c-30.9 0-56-25.1-56-56L0 56zM56 416c-22.1 0-40 17.9-40 40s17.9 40 40 40l344 0 0-80L56 416zm-40 .8C26.2 406.4 40.3 400 56 400l376 0 0-384L56 16C33.9 16 16 33.9 16 56l0 360.8zM244.9 96l2.2 4.4L356.9 320l-17.9 0-32-64-134.1 0-32 64-17.9 0L232.8 100.4l2.2-4.4 9.9 0zm-64 144l118.1 0L240 121.9 180.9 240z" />
    </Icon>
);

export default BookFont;