
import { Icon } from "../../index";

/**
 * A component that renders the `book-open` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open?s=thin book-open}
 * @preview ![book-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/book-open.svg)
 */
const BookOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M156 32c44.6 0 89.7 8.6 132 22.6C330.3 40.6 375.4 32 420 32c55.4 0 107.2 14.6 128.9 21.6C565.7 59 576 74.5 576 91.1l0 311.5c0 26.9-25.1 44.8-49 40.6c-18.5-3.2-51.3-7.2-99-7.2c-58.9 0-97.8 24.3-111.2 34.1c-7.7 5.7-17.9 9.9-29.3 9.9c-10.2 0-19.6-3.4-27-8.4C245.5 461.5 202 436 148 436c-45.2 0-80.1 4.4-100 7.7c-24 4-48-14.1-48-40.2L0 91.1C0 74.5 10.3 59 27.1 53.6C48.8 46.6 100.6 32 156 32zM280 68.8C239.9 55.8 197.6 48 156 48C103 48 53.1 62 32 68.8C22.2 72 16 81.1 16 91.1l0 312.5C16 419 30.4 430.5 45.4 428c20.6-3.4 56.4-8 102.6-8c58.7 0 105.4 27.5 121.4 38.3c3.2 2.1 6.8 3.8 10.6 4.8l0-394.2zm16 394c4.2-1.2 8-3.2 11.4-5.6c15-11.1 57.2-37.2 120.6-37.2c48.6 0 82.3 4.1 101.7 7.4c15.2 2.6 30.3-9 30.3-24.9l0-311.5c0-10-6.2-19.1-16-22.2C522.9 62 473 48 420 48c-41.6 0-83.9 7.8-124 20.8l0 394z" />
    </Icon>
);

export default BookOpen;