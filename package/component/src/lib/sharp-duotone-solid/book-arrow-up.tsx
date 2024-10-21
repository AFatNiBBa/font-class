
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=sharp-duotone-solid book-arrow-up}
 * @preview ![book-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-arrow-up.svg)
 */
const BookArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0 17.7 14.3 32 32 32l120 0 0-64L96 384c-17.7 0-32 14.3-32 32zm200-32l0 64 88 0 64 0 0-64-64 0-88 0z" />
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l120 0 0-64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l120 0 0-174.1-39 39-17 17L126.1 232l17-17 80-80 17-17 17 17 80 80 17 17L320 265.9l-17-17-39-39L264 384l88 0 64 0 32 0L448 0 416 0 384 0 96 0zM264 448l0 64 120 0 32 0 32 0 0-64-32 0-64 0-88 0z" />
    </Icon>
);

export default BookArrowUp;