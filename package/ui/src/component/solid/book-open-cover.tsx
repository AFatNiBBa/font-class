
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-cover` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-cover?s=solid book-open-cover}
 * @preview ![book-open-cover](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/book-open-cover.svg)
 */
const BookOpenCover: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 32l0 376L96 368 96 34.7C96 14.9 113.8-.2 133.3 3.1L304 32zM89.7 405.1L320 451.2l230.3-46.1c15-3 25.7-16.1 25.7-31.4l0-345 25.7-5.1C621.5 19.7 640 34.8 640 55l0 366.7c0 15.3-10.8 28.4-25.7 31.4L320 512 25.7 453.1C10.8 450.2 0 437 0 421.8L0 55C0 34.8 18.5 19.7 38.3 23.7L64 28.8l0 345c0 15.3 10.8 28.4 25.7 31.4zM336 408l0-376L506.7 3.1C526.2-.2 544 14.9 544 34.7L544 368 336 408z" />
    </Icon>
);

export default BookOpenCover;