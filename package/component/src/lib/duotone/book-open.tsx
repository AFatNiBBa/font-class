
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-open` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open?s=duotone book-open}
 * @preview ![book-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/book-open.svg)
 */
const BookOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 72c16-16 80-40 144-40c50.5 0 97.7 13.3 125.9 24.1C569.2 60.5 576 71.7 576 83.8l0 370.3c0 11.9-12.8 20.2-24.1 16.5C520.4 460.1 470.5 448 432 448c-51.2 0-144 32-144 32l0-408z" />
        <path d="M288 72V480s-92.8-32-144-32c-38.5 0-88.4 12.1-119.9 22.6C12.8 474.3 0 466 0 454.1V83.8C0 71.7 6.8 60.5 18.1 56.1C46.3 45.3 93.5 32 144 32c64 0 128 24 144 40z" />
    </Icon>
);

export default BookOpen;