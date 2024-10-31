
import { Icon } from "../../index";

/**
 * A component that renders the `book-skull` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-skull?s=sharp-solid book-skull}
 * @preview ![book-skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/book-skull.svg)
 */
const BookSkull: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 43 43 0 96 0L384 0l32 0 32 0 0 384-32 0 0 64 32 0 0 64-32 0-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32zM320 112c0-35.3-35.8-64-80-64s-80 28.7-80 64c0 20.9 12.6 39.5 32 51.2l0 28.8 96 0 0-28.8c19.4-11.7 32-30.3 32-51.2zM208 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM134.3 209.3L119.6 203 107 232.4l14.7 6.3L199.4 272l-77.7 33.3L107 311.6 119.6 341l14.7-6.3L240 289.4l105.7 45.3 14.7 6.3L373 311.6l-14.7-6.3L280.6 272l77.7-33.3 14.7-6.3L360.4 203l-14.7 6.3L240 254.6 134.3 209.3z" />
    </Icon>
);

export default BookSkull;