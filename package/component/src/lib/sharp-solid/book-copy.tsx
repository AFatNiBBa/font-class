
import { Icon } from "../../index";

/**
 * A component that renders the `book-copy` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-copy?s=sharp-solid book-copy}
 * @preview ![book-copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/book-copy.svg)
 */
const BookCopy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 96L96 96C43 96 0 139 0 192L0 416c0 53 43 96 96 96l224 0 32 0 32 0 0-64-32 0-32 0-32 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.1 0c-10.9-18.8-17.1-40.7-17.1-64l0-224zM320 416l32 0 160 0 32 0 32 0 0-32 0-32-32 0 0-64 32 0 0-256 0-32L544 0 512 0 288 0c-53 0-96 43-96 96l0 224c0 24.6 9.2 47 24.4 64c17.6 19.6 43.1 32 71.6 32l32 0zm-64-96c0-17.7 14.3-32 32-32l96 0 96 0 0 64-96 0-96 0c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default BookCopy;