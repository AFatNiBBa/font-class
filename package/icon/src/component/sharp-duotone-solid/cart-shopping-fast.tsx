
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-shopping-fast` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-shopping-fast?s=sharp-duotone-solid cart-shopping-fast}
 * @preview ![cart-shopping-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cart-shopping-fast.svg)
 */
const CartShoppingFast: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 48 112 0 0-48L0 96zm0 80l0 48 128 0 0-48L0 176zm0 80l0 48 144 0 0-48L0 256zM186 32c16.3 85.3 32.5 170.7 48.8 256L560 288 640 32 186 32z" />
        <path d="M64 0L88 0l72 0 19.9 0 3.7 19.5L243.9 336 552 336l24 0 0 48-24 0-328 0-19.9 0-3.7-19.5L140.1 48 88 48 64 48 64 0zM192 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CartShoppingFast;