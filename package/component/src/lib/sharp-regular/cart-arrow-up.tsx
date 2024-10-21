
import { Icon } from "../../index";

/**
 * A component that renders the `cart-arrow-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-arrow-up?s=sharp-regular cart-arrow-up}
 * @preview ![cart-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cart-arrow-up.svg)
 */
const CartArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L24 0 96 0l19.9 0 3.7 19.5 42 220.5 300.6 0 63-208 50.2 0L503 271l-5.2 17L480 288l-309.3 0 9.1 48L488 336l24 0 0 48-24 0-328 0-19.9 0-3.7-19.5L76.1 48 24 48 0 48 0 0zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM296 184l0-86.1-23 23-17 17L222.1 104l17-17 64-64 17-17 17 17 64 64 17 17L384 137.9l-17-17-23-23 0 86.1 0 24-48 0 0-24z" />
    </Icon>
);

export default CartArrowUp;