
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=sharp-solid book-arrow-up}
 * @preview ![book-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/book-arrow-up.svg)
 */
const BookArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 43 43 0 96 0L384 0l32 0 32 0 0 384-32 0 0 64 32 0 0 64-32 0-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64-88 0 0-174.1 39 39 17 17L353.9 232l-17-17-80-80-17-17-17 17-80 80-17 17L160 265.9l17-17 39-39L216 384 96 384c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default BookArrowUp;