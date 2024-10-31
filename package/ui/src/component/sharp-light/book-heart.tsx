
import { Icon } from "../../index";

/**
 * A component that renders the `book-heart` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-heart?s=sharp-light book-heart}
 * @preview ![book-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/book-heart.svg)
 */
const BookHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L432 0l16 0 0 16 0 384 0 16-16 0-16 0 0 64 16 0 16 0 0 32-16 0L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0L0 64zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0 0-64L64 416zM32 392.6c9.4-5.4 20.3-8.6 32-8.6l352 0 0-352L64 32C46.3 32 32 46.3 32 64l0 328.6zM232.3 129.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L240 304.1l-11.1-10.7-82.8-79.6c-11.6-11.2-18.2-26.6-18.2-42.7c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2zm79.3 61.6c5.3-5.1 8.3-12.2 8.3-19.6c0-15-12.2-27.2-27.2-27.2l-2.4 0c-7.7 0-15 3-20.5 8.3l-7.7 7.4L240 181l-22.2-21.3-7.7-7.4c-5.5-5.3-12.9-8.3-20.5-8.3l-2.4 0c-15 0-27.2 12.2-27.2 27.2c0 7.4 3 14.5 8.3 19.6L240 259.7l71.7-68.9z" />
    </Icon>
);

export default BookHeart;