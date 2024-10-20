
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-right?s=sharp-solid book-arrow-right}
 * @preview ![book-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/book-arrow-right.svg)
 */
const BookArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0 32 0 0-64-32 0 0-64 32 0 0-152 94.1 0-39 39-17 17L520 321.9l17-17 80-80 17-17-17-17-80-80-17-17L486.1 128l17 17 39 39L448 184 448 0 416 0 384 0 96 0zM448 184l0 48-200 0-24 0 0-48 24 0 200 0zM96 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default BookArrowRight;