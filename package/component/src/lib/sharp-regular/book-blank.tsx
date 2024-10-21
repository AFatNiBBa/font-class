
import { Icon } from "../../index";

/**
 * A component that renders the `book-blank` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-blank?s=sharp-regular book-blank}
 * @preview ![book-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/book-blank.svg)
 */
const BookBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M88 0C39.4 0 0 39.4 0 88L0 424l.4 0c-.3 2.6-.4 5.3-.4 8c0 44.2 35.8 80 80 80l344 0 24 0 0-48-24 0-8 0 0-64 8 0 24 0 0-24 0-352 0-24L424 0 88 0zM368 400l0 64L80 464c-17.7 0-32-14.3-32-32s14.3-32 32-32l288 0zM80 352c-11.4 0-22.2 2.4-32 6.7L48 88c0-22.1 17.9-40 40-40l312 0 0 304L80 352z" />
    </Icon>
);

export default BookBlank;