
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-cover` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-cover?s=sharp-light book-open-cover}
 * @preview ![book-open-cover](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/book-open-cover.svg)
 */
const BookOpenCover: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 373.8l208 41.6 0-350.1L96 36.7l0 337.1zm240 41.6l208-41.6 0-337.1L336 65.3l0 350.1zM576 0l0 32.3L576 400 320 451.2 64 400 64 32.3 64 0 96 4.4 320 35.2 544 4.4 576 0zM0 28.8l32 4.4 0 32.3L32 160l0 258.6 288 57.6 288-57.6L608 160l0-94.5 0-32.3 32-4.4 0 32.3 0 383.7-320 64L0 444.8 0 61.1 0 28.8z" />
    </Icon>
);

export default BookOpenCover;