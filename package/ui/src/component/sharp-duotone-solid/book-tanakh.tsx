
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-tanakh` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-tanakh?s=sharp-duotone-solid book-tanakh}
 * @preview ![book-tanakh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-tanakh.svg)
 */
const BookTanakh: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 384l64 0 96 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0-96 0-64 0 0-64z" />
        <path d="M448 96c0-53-43-96-96-96L64 0 32 0 0 0 0 384l32 0 64 0 96 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0-96 0-64 0L0 448l0 64 32 0 32 0 288 0c53 0 96-43 96-96l0-320zM208 40l13.9 24 27.7 48 55.4 0 27.7 0-13.9 24-27.7 48 27.7 48 13.9 24L305 256l-55.4 0-27.7 48L208 328l-13.9-24-27.7-48L111 256l-27.7 0 13.9-24 27.7-48L97.1 136 83.3 112l27.7 0 55.4 0 27.7-48L208 40zm55.4 96l13.9 24 13.9-24-27.7 0zm0 48l-27.7-48-55.4 0-27.7 48 27.7 48 55.4 0 27.7-48zm13.9 24l-13.9 24 27.7 0-13.9-24zm-55.4 48l-27.7 0L208 280l13.9-24zm-69.3-24l-13.9-24-13.9 24 27.7 0zm-13.9-72l13.9-24-27.7 0 13.9 24zm55.4-48l27.7 0L208 88l-13.9 24z" />
    </Icon>
);

export default BookTanakh;