
import { Icon } from "../../index";

/**
 * A component that renders the `book-font` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-font?s=sharp-solid book-font}
 * @preview ![book-font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/book-font.svg)
 */
const BookFont: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 43 43 0 96 0L384 0l32 0 32 0 0 384-32 0 0 64 32 0 0 64-32 0-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32zM250.1 64l-20.2 0-4.4 9.1-61.2 128-40.2 84-1.4 2.9 35.5 0 30.6-64 102.3 0 30.6 64 35.5 0-1.4-2.9-40.2-84-61.2-128L250.1 64zm25.7 128l-71.7 0L240 117.1 275.8 192z" />
    </Icon>
);

export default BookFont;