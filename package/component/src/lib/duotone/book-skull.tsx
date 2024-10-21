
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-skull` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-skull?s=duotone book-skull}
 * @preview ![book-skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/book-skull.svg)
 */
const BookSkull: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0-17.7 14.3-32 32-32l160 0 96 0 64 0 0 64-64 0-96 0L96 448c-17.7 0-32-14.3-32-32z" />
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-96 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 96 0 64 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zM320 112c0 20.9-12.6 39.5-32 51.2l0 12.8c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-12.8c-19.4-11.7-32-30.3-32-51.2c0-35.3 35.8-64 80-64s80 28.7 80 64zM208 128a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM134.3 209.3L240 254.6l105.7-45.3c8.1-3.5 17.5 .3 21 8.4s-.3 17.5-8.4 21L280.6 272l77.7 33.3c8.1 3.5 11.9 12.9 8.4 21s-12.9 11.9-21 8.4L240 289.4 134.3 334.7c-8.1 3.5-17.5-.3-21-8.4s.3-17.5 8.4-21L199.4 272l-77.7-33.3c-8.1-3.5-11.9-12.9-8.4-21s12.9-11.9 21-8.4z" />
    </Icon>
);

export default BookSkull;