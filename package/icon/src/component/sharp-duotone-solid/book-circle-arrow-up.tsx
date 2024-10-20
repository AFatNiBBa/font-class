
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-circle-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-circle-arrow-up?s=sharp-duotone-solid book-circle-arrow-up}
 * @preview ![book-circle-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-circle-arrow-up.svg)
 */
const BookCircleArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 43 43 0 96 0L384 0l32 0 32 0 0 198.6C374.1 219.5 320 287.4 320 368c0 5.4 .2 10.7 .7 16L96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l243.2 0c13.1 25.6 32.2 47.6 55.6 64L384 512 96 512c-53 0-96-43-96-96L0 96z" />
        <path d="M640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM428.7 348.7l56-56L496 281.4l11.3 11.3 56 56L574.6 360 552 382.6l-11.3-11.3L512 342.6l0 89.4 0 16-32 0 0-16 0-89.4-28.7 28.7L440 382.6 417.4 360l11.3-11.3z" />
    </Icon>
);

export default BookCircleArrowUp;