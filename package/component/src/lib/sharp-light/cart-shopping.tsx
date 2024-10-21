
import { Icon } from "../../index";

/**
 * A component that renders the `cart-shopping` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-shopping?s=sharp-light cart-shopping}
 * @preview ![cart-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cart-shopping.svg)
 */
const CartShopping: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 0L0 0 0 32l16 0 51.2 0 77.2 339.5 2.8 12.5 12.8 0 336 0 16 0 0-32-16 0-323.2 0-14.5-64L496 288 566 64l10-32-33.5 0L100 32 95.6 12.5 92.8 0 80 0 16 0zm91.3 64l425.2 0-60 192L151 256 107.3 64zM184 432a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm248-56a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0z" />
    </Icon>
);

export default CartShopping;