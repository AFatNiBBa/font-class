
import { Icon } from "../../index";

/**
 * A component that renders the `cart-plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-plus?s=sharp-regular cart-plus}
 * @preview ![cart-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cart-plus.svg)
 */
const CartPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 52.1 0 60.3 316.5 3.7 19.5 19.9 0 328 0 24 0 0-48-24 0-308.1 0-9.1-48L480 288l17.8 0 5.2-17L575.4 32l-50.2 0-63 208-300.6 0-42-220.5L115.9 0 96 0 24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM232 88l0 48 24 0 40 0 0 40 0 24 48 0 0-24 0-40 40 0 24 0 0-48-24 0-40 0 0-40 0-24-48 0 0 24 0 40-40 0-24 0z" />
    </Icon>
);

export default CartPlus;