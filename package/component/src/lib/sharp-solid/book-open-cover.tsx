
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-cover` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-cover?s=sharp-solid book-open-cover}
 * @preview ![book-open-cover](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/book-open-cover.svg)
 */
const BookOpenCover: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 32l0 376L96 368 96 0 304 32zM64 400l256 51.2L576 400l0-371.2L640 16l0 432L320 512 0 448 0 16 64 28.8 64 400zm272 8l0-376L544 0l0 368L336 408z" />
    </Icon>
);

export default BookOpenCover;