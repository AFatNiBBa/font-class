
import { Icon } from "../../index";

/**
 * A component that renders the `cart-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-minus?s=sharp-solid cart-minus}
 * @preview ![cart-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cart-minus.svg)
 */
const CartMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L24 0 96 0l19.9 0 3.7 19.5L122 32l454 0L496 288l-325.3 0 9.1 48L488 336l24 0 0 48-24 0-328 0-19.9 0-3.7-19.5L76.1 48 24 48 0 48 0 0zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM256 172l160 0 0-40-160 0 0 40z" />
    </Icon>
);

export default CartMinus;