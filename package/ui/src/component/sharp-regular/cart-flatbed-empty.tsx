
import { Icon } from "../../index";

/**
 * A component that renders the `cart-flatbed-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed-empty?s=sharp-regular cart-flatbed-empty}
 * @preview ![cart-flatbed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cart-flatbed-empty.svg)
 */
const CartFlatbedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L24 0l80 0 24 0 0 24 0 392 80 0 288 0 120 0 24 0 0 48-24 0-72 0c0 26.5-21.5 48-48 48s-48-21.5-48-48l-192 0c0 26.5-21.5 48-48 48s-48-21.5-48-48l-56 0-24 0 0-24L80 48 24 48 0 48 0 0z" />
    </Icon>
);

export default CartFlatbedEmpty;