
import { Icon } from "../../index";

/**
 * A component that renders the `book-open` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open?s=sharp-regular book-open}
 * @preview ![book-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/book-open.svg)
 */
const BookOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 480s-64.7-38.8-144-40c-28.7-.4-66.4 6-96 12.4C20.5 458.2 0 464 0 464l0-49.7L0 72s64-40 160-40c72 0 128 24 128 24s64-24 128-24c96 0 160 40 160 40l0 342.3 0 49.7s-20.5-5.8-48-11.6c-29.6-6.3-67.3-12.8-96-12.4c-79.3 1.2-144 40-144 40zm240-76.7l0-301.5c-3.7-1.5-7.7-3.1-12.1-4.7C491.8 88.6 457.4 80 416 80c-26.6 0-54.3 5.1-76.4 10.6c-10.8 2.7-19.8 5.4-26 7.4c-.6 .2-1.2 .4-1.7 .5L312 416c.4-.2 .9-.3 1.3-.5c29.3-11.1 71-22.8 118-23.5c31-.5 68 5.5 96.7 11.3zM264 416l0-317.9c-.6-.2-1.2-.4-1.9-.7c-5.3-1.9-13.2-4.5-23.3-7.1C218.7 85.2 190.8 80 160 80c-41.4 0-75.8 8.6-99.9 17.2c-4.4 1.6-8.5 3.2-12.1 4.7l0 301.5c28.8-5.8 65.8-11.8 96.7-11.3c47 .7 88.6 12.5 118 23.5c.4 .2 .9 .3 1.3 .5z" />
    </Icon>
);

export default BookOpen;