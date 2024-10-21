
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-circle-arrow-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-circle-arrow-right?s=duotone book-circle-arrow-right}
 * @preview ![book-circle-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/book-circle-arrow-right.svg)
 */
const BookCircleArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 43 43 0 96 0L384 0l32 0c17.7 0 32 14.3 32 32l0 166.6C374.1 219.5 320 287.4 320 368c0 5.4 .2 10.7 .7 16L96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l243.2 0c13.1 25.6 32.2 47.6 55.6 64L384 512 96 512c-53 0-96-43-96-96L0 96z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm19.3-211.3l56 56c6.2 6.2 6.2 16.4 0 22.6l-56 56c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L521.4 384 432 384c-8.8 0-16-7.2-16-16s7.2-16 16-16l89.4 0-28.7-28.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0z" />
    </Icon>
);

export default BookCircleArrowRight;