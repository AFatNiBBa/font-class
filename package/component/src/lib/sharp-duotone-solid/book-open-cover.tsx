
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-open-cover` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-cover?s=sharp-duotone-solid book-open-cover}
 * @preview ![book-open-cover](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-open-cover.svg)
 */
const BookOpenCover: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 0L304 32l0 416L64 400 64 28.8 64 0zM336 32L576 0l0 28.8L576 400c-80 16-160 32-240 48l0-416z" />
        <path d="M64 400l256 51.2L576 400l0-371.2L640 16l0 432L320 512 0 448 0 16 64 28.8 64 400z" />
    </Icon>
);

export default BookOpenCover;