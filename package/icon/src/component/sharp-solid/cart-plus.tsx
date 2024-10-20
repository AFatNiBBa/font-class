
import { Icon } from "../../index";

/**
 * A component that renders the `cart-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-plus?s=sharp-solid cart-plus}
 * @preview ![cart-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cart-plus.svg)
 */
const CartPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 52.1 0 60.3 316.5 3.7 19.5 19.9 0 328 0 24 0 0-48-24 0-308.1 0-9.1-48L496 288 576 32 122 32l-2.4-12.5L115.9 0 96 0 24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM316 180l-60 0 0-40 60 0 0-60 40 0 0 60 60 0 0 40-60 0 0 60-40 0 0-60z" />
    </Icon>
);

export default CartPlus;