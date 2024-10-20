
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=thin book-arrow-up}
 * @preview ![book-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/book-arrow-up.svg)
 */
const BookArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M56 0C25.1 0 0 25.1 0 56L0 456c0 30.9 25.1 56 56 56l136 0 0-16L56 496c-22.1 0-40-17.9-40-40s17.9-40 40-40l136 0 0-16L56 400c-15.7 0-29.8 6.4-40 16.8L16 56c0-22.1 17.9-40 40-40l352 0c13.3 0 24 10.7 24 24l0 336c0 13.3-10.7 24-24 24l-120 0 0 16 112 0 0 80-112 0 0 16 152 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-80.8c18.3-3.7 32-19.8 32-39.2l0-336c0-22.1-17.9-40-40-40L56 0zm74.3 234.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L232 155.3 232 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-348.7 90.3 90.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-104-104c-3.1-3.1-8.2-3.1-11.3 0l-104 104z" />
    </Icon>
);

export default BookArrowUp;