
import { Icon } from "../../index";

/**
 * A component that renders the `cart-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-xmark?s=sharp-light cart-xmark}
 * @preview ![cart-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cart-xmark.svg)
 */
const CartXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L16 0 80 0 92.8 0l2.8 12.5L151 256 476 256 541.9 32l33.4 0L503.4 276.5 500 288l-12 0-329.8 0 14.5 64L496 352l16 0 0 32-16 0-336 0-12.8 0-2.8-12.5L67.2 32 16 32 0 32 0 0zM184 480a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm296 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM379.3 91.3L342.6 128l36.7 36.7L390.6 176 368 198.6l-11.3-11.3L320 150.6l-36.7 36.7L272 198.6 249.4 176l11.3-11.3L297.4 128 260.7 91.3 249.4 80 272 57.4l11.3 11.3L320 105.4l36.7-36.7L368 57.4 390.6 80 379.3 91.3z" />
    </Icon>
);

export default CartXmark;