
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-open-reader` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-reader?s=sharp-duotone-solid book-open-reader}
 * @preview ![book-open-reader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-open-reader.svg)
 */
const BookOpenReader: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 96a96 96 0 1 0 192 0A96 96 0 1 0 160 96z" />
        <path d="M240 512l0-264-21.3-12.4C169.8 207 114.1 192 57.5 192L0 192 0 456l116.7 13c18.1 2 35.8 6.6 52.6 13.6L240 512zm32 0l48.4-24.2c20.9-10.4 43.5-17 66.8-19.3L512 456l0-264-62.3 0c-63.6 0-125.6 19.6-177.7 56l0 264z" />
    </Icon>
);

export default BookOpenReader;