
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-right?s=thin book-arrow-right}
 * @preview ![book-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/book-arrow-right.svg)
 */
const BookArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M56 0C25.1 0 0 25.1 0 56L0 456c0 30.9 25.1 56 56 56l384 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-80.8c18.3-3.7 32-19.8 32-39.2l0-120-16 0 0 120c0 13.3-10.7 24-24 24L56 400c-15.7 0-29.8 6.4-40 16.8L16 56c0-22.1 17.9-40 40-40l352 0c13.3 0 24 10.7 24 24l0 120 16 0 0-120c0-22.1-17.9-40-40-40L56 0zM400 416l0 80L56 496c-22.1 0-40-17.9-40-40s17.9-40 40-40l344 0zM533.7 98.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L612.7 200 264 200c-4.4 0-8 3.6-8 8s3.6 8 8 8l348.7 0-90.3 90.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l104-104c3.1-3.1 3.1-8.2 0-11.3l-104-104z" />
    </Icon>
);

export default BookArrowRight;