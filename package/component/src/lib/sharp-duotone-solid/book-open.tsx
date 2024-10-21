
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open?s=sharp-duotone-solid book-open}
 * @preview ![book-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-open.svg)
 */
const BookOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 72c16-16 80-40 144-40s122.7 21.3 144 32l0 416c-21.3-10.7-92.8-32-144-32s-144 32-144 32l0-408z" />
        <path d="M288 72V480s-92.8-32-144-32S21.3 469.3 0 480V64C21.3 53.3 80 32 144 32s128 24 144 40z" />
    </Icon>
);

export default BookOpen;