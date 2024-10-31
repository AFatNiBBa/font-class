
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-reader` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-reader?s=thin book-open-reader}
 * @preview ![book-open-reader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/book-open-reader.svg)
 */
const BookOpenReader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176A96 96 0 1 0 256 0a96 96 0 1 0 0 192zm0 48s-56.8-42.6-224-47.5C14.4 191.9 0 206.3 0 224L0 432c0 17.7 14.4 31.9 32 32.7c114.9 4.7 186.9 33.7 208.8 43.8c4.8 2.2 9.9 3.5 15.1 3.5s10.4-1.3 15.1-3.5c21.9-10.1 93.9-39.1 208.8-43.8c17.7-.7 32-15 32-32.7l0-208c0-17.7-14.4-32.1-32-31.5C312.8 197.4 256 240 256 240zm-8 14l0 240.2c-.1-.1-.3-.1-.4-.2c-23.5-10.9-97.6-40.5-214.9-45.3c-9.5-.4-16.7-8-16.7-16.7l0-208c0-8.9 7.2-15.8 15.6-15.5c82.3 2.4 136.8 14.1 170.2 24.9c16.7 5.4 28.3 10.5 35.4 14.2c3.6 1.8 6 3.3 7.5 4.2c.7 .5 1.2 .8 1.5 1l.2 .2L248 254zm16 240.2L264 254l1.5-1.1 .2-.2c.3-.2 .8-.5 1.5-1c1.5-.9 4-2.4 7.5-4.2c7.1-3.7 18.7-8.8 35.4-14.2c33.5-10.8 88-22.4 170.2-24.9c8.4-.2 15.6 6.6 15.6 15.5l0 208c0 8.7-7.2 16.3-16.7 16.7C362 453.5 287.9 483.1 264.4 494c-.1 .1-.3 .1-.4 .2z" />
    </Icon>
);

export default BookOpenReader;