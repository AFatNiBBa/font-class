
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-cover` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-cover?s=sharp-regular book-open-cover}
 * @preview ![book-open-cover](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/book-open-cover.svg)
 */
const BookOpenCover: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 337.2l0-281.6L344 80.2 344 373l168-35.8zM296 373l0-292.8L128 55.6l0 281.6L296 373zM80 0l48 7L320 35.2 512 7l48-7 0 48.5L560 376 333.4 424.4c-8.8 1.9-17.9 1.9-26.7 0L80 376 80 48.5 80 0zM48 25.6l.5 .1c-.3 2.7-.5 5.4-.5 8.1l0 40.7 0 267.6 0 66.5L320 463l272-54.4 0-66.5 0-267.6 0-40.7c0-2.8-.2-5.5-.5-8.1l.5-.1L640 16l0 49 0 383L320 512 0 448 0 65 0 16l48 9.6z" />
    </Icon>
);

export default BookOpenCover;