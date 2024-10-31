
import { Icon } from "../../index";

/**
 * A component that renders the `book-open` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open?s=sharp-solid book-open}
 * @preview ![book-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/book-open.svg)
 */
const BookOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M272 480l0-408c-16-16-64-40-128-40S21.3 53.3 0 64L0 480c21.3-10.7 92.8-32 144-32s128 32 128 32zm32 0s76.8-32 128-32s122.7 21.3 144 32l0-416c-21.3-10.7-80-32-144-32s-112 24-128 40l0 408z" />
    </Icon>
);

export default BookOpen;