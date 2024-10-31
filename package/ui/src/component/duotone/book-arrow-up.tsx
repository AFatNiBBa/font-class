
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=duotone book-arrow-up}
 * @preview ![book-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/book-arrow-up.svg)
 */
const BookArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0 17.7 14.3 32 32 32l120 0 0-64L96 384c-17.7 0-32 14.3-32 32zm200-32l0 64 88 0 64 0 0-64-64 0-88 0z" />
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l120 0 0-64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l120 0 0-174.1-39 39c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-39-39L264 384l88 0 64 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zM264 448l0 64 120 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-88 0z" />
    </Icon>
);

export default BookArrowUp;