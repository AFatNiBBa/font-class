
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-quran` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-quran?s=duotone book-quran}
 * @preview ![book-quran](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/book-quran.svg)
 */
const BookQuran: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 384l64 0 96 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0-96 0-64 0 0-64z" />
        <path d="M448 96c0-53-43-96-96-96L64 0 32 0C14.3 0 0 14.3 0 32L0 352c0 17.7 14.3 32 32 32l64 0 96 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0-96 0-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 288 0c53 0 96-43 96-96l0-320zM274.1 150.2c2.2-5.3 9.6-5.3 11.8 0l8.9 21.4 23.1 1.9c5.7 .5 8 7.5 3.7 11.2L304 199.8l5.4 22.6c1.3 5.5-4.7 9.9-9.6 6.9L280 217.2l-19.8 12.1c-4.9 3-10.9-1.4-9.6-6.9l5.4-22.6-17.6-15.1c-4.3-3.7-2-10.8 3.7-11.2l23.1-1.9 8.9-21.4zM96 192c0-70.7 57.3-128 128-128c25.6 0 49.5 7.5 69.5 20.5c3.2 2.1 4.5 6.2 3.1 9.7s-5.2 5.6-9 4.8c-6.1-1.2-12.5-1.9-19-1.9c-52.4 0-94.9 42.5-94.9 94.9s42.5 94.9 94.9 94.9c6.5 0 12.8-.7 19-1.9c3.8-.8 7.5 1.3 9 4.8s.2 7.6-3.1 9.7c-20 13-43.9 20.5-69.5 20.5c-70.7 0-128-57.3-128-128z" />
    </Icon>
);

export default BookQuran;