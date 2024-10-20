
import { Icon } from "../../index";

/**
 * A component that renders the `cart-minus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-minus?s=sharp-light cart-minus}
 * @preview ![cart-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cart-minus.svg)
 */
const CartMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L16 0 80 0 92.8 0l2.8 12.5L151 256 476 256 541.9 32l33.4 0L503.4 276.5 500 288l-12 0-329.8 0 14.5 64L496 352l16 0 0 32-16 0-336 0-12.8 0-2.8-12.5L67.2 32 16 32 0 32 0 0zM184 480a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm296 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM256 112l128 0 16 0 0 32-16 0-128 0-16 0 0-32 16 0z" />
    </Icon>
);

export default CartMinus;