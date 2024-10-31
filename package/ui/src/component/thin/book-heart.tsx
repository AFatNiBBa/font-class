
import { Icon } from "../../index";

/**
 * A component that renders the `book-heart` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-heart?s=thin book-heart}
 * @preview ![book-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/book-heart.svg)
 */
const BookHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56C0 25.1 25.1 0 56 0L408 0c22.1 0 40 17.9 40 40l0 336c0 19.4-13.7 35.5-32 39.2l0 80.8 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L56 512c-30.9 0-56-25.1-56-56L0 56zM56 416c-22.1 0-40 17.9-40 40s17.9 40 40 40l344 0 0-80L56 416zm-40 .8C26.2 406.4 40.3 400 56 400l352 0c13.3 0 24-10.7 24-24l0-336c0-13.3-10.7-24-24-24L56 16C33.9 16 16 33.9 16 56l0 360.8zM144 169.9l0 .6c0 10.6 4 20.9 11.2 28.8l78.9 86.1c1.5 1.7 3.7 2.6 5.9 2.6s4.4-.9 5.9-2.6l78.9-86.1c7.2-7.8 11.2-18.1 11.2-28.8l0-.6c0-23.2-18.8-41.9-41.9-41.9c-11.1 0-21.8 4.4-29.7 12.3L245.7 159c-1.5 1.5-3.5 2.3-5.7 2.3s-4.2-.8-5.7-2.3l-18.7-18.7c-7.9-7.9-18.5-12.3-29.7-12.3c-23.2 0-41.9 18.8-41.9 41.9zM185.9 112c15.4 0 30.1 6.1 41 17L240 142.1 253.1 129c10.9-10.9 25.6-17 41-17c32 0 57.9 25.9 57.9 57.9l0 .6c0 14.7-5.5 28.8-15.4 39.6l-78.9 86.1c-4.5 5-11 7.8-17.7 7.8s-13.1-2.8-17.7-7.8l-78.9-86.1c-9.9-10.8-15.4-24.9-15.4-39.6l0-.6c0-32 25.9-57.9 57.9-57.9z" />
    </Icon>
);

export default BookHeart;