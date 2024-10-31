
import { Icon } from "../../index";

/**
 * A component that renders the `book-user` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-user?s=regular book-user}
 * @preview ![book-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/book-user.svg)
 */
const BookUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M88 0C39.4 0 0 39.4 0 88L0 424l.4 0c-.3 2.6-.4 5.3-.4 8c0 44.2 35.8 80 80 80l344 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-69.4c18.9-9 32-28.3 32-50.6l0-288c0-30.9-25.1-56-56-56L88 0zM368 400l0 64L80 464c-17.7 0-32-14.3-32-32s14.3-32 32-32l288 0zM80 352c-11.4 0-22.2 2.4-32 6.7L48 88c0-22.1 17.9-40 40-40l304 0c4.4 0 8 3.6 8 8l0 288c0 4.4-3.6 8-8 8l-40 0 0-16c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l0 16-48 0zM240 224a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default BookUser;