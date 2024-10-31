
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-skull` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-skull?s=sharp-duotone-solid book-skull}
 * @preview ![book-skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-skull.svg)
 */
const BookSkull: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0-17.7 14.3-32 32-32l160 0 96 0 64 0 0 64-64 0-96 0L96 448c-17.7 0-32-14.3-32-32z" />
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0 32 0 0-64-32 0-64 0-96 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 96 0 64 0 32 0L448 0 416 0 384 0 96 0zM320 112c0 20.9-12.6 39.5-32 51.2l0 28.8-96 0 0-28.8c-19.4-11.7-32-30.3-32-51.2c0-35.3 35.8-64 80-64s80 28.7 80 64zM208 128a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM134.3 209.3L240 254.6l105.7-45.3 14.7-6.3L373 232.4l-14.7 6.3L280.6 272l77.7 33.3 14.7 6.3L360.4 341l-14.7-6.3L240 289.4 134.3 334.7 119.6 341 107 311.6l14.7-6.3L199.4 272l-77.7-33.3L107 232.4 119.6 203l14.7 6.3z" />
    </Icon>
);

export default BookSkull;