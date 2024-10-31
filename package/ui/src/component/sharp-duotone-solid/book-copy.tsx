
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-copy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-copy?s=sharp-duotone-solid book-copy}
 * @preview ![book-copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-copy.svg)
 */
const BookCopy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 416c0 53 43 96 96 96l224 0 32 0 32 0 0-64-32 0-32 0-32 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.1 0c-10.9-18.8-17.1-40.7-17.1-64l0-224L96 96C43 96 0 139 0 192z" />
        <path d="M288 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l224 0 32 0 32 0 0-64-32 0 0-64 32 0L576 0 544 0 512 0 288 0zm0 288l192 0 0 64-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default BookCopy;