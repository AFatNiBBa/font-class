
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-quran` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-quran?s=sharp-duotone-solid book-quran}
 * @preview ![book-quran](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-quran.svg)
 */
const BookQuran: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 384l64 0 96 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0-96 0-64 0 0-64z" />
        <path d="M448 96c0-53-43-96-96-96L64 0 32 0 0 0 0 384l32 0 64 0 96 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0-96 0-64 0L0 448l0 64 32 0 32 0 288 0c53 0 96-43 96-96l0-320zM301.7 90.3c-7-1.5-14.3-2.3-21.7-2.3c-57.4 0-104 46.6-104 104s46.6 104 104 104c7.4 0 14.7-.8 21.7-2.3C280.1 310.2 253.2 320 224 320c-70.7 0-128-57.3-128-128s57.3-128 128-128c29.2 0 56.1 9.8 77.7 26.3zm-6.9 81.3l38.4 3.1L304 199.8l8.9 37.5L280 217.2l-32.9 20.1 8.9-37.5-29.3-25.1 38.4-3.1L280 136l14.8 35.6z" />
    </Icon>
);

export default BookQuran;