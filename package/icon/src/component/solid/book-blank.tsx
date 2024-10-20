
import { Icon } from "../../index";

/**
 * A component that renders the `book-blank` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-blank?s=solid book-blank}
 * @preview ![book-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/book-blank.svg)
 */
const BookBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default BookBlank;