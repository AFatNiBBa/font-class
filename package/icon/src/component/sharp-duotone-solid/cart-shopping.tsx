
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-shopping` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-shopping?s=sharp-duotone-solid cart-shopping}
 * @preview ![cart-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cart-shopping.svg)
 */
const CartShopping: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M122 32l454 0L496 288l-325.3 0C154.5 202.7 138.2 117.3 122 32z" />
        <path d="M0 0L24 0 96 0l19.9 0 3.7 19.5L179.9 336 488 336l24 0 0 48-24 0-328 0-19.9 0-3.7-19.5L76.1 48 24 48 0 48 0 0zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CartShopping;