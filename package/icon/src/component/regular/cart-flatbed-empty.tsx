
import { Icon } from "../../index";

/**
 * A component that renders the `cart-flatbed-empty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed-empty?s=regular cart-flatbed-empty}
 * @preview ![cart-flatbed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cart-flatbed-empty.svg)
 */
const CartFlatbedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 24C0 10.7 10.7 0 24 0L72 0c30.9 0 56 25.1 56 56l0 352c0 4.4 3.6 8 8 8l72 0 288 0 120 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-72 0c0 26.5-21.5 48-48 48s-48-21.5-48-48l-192 0c0 26.5-21.5 48-48 48s-48-21.5-48-48l-24 0c-30.9 0-56-25.1-56-56L80 56c0-4.4-3.6-8-8-8L24 48C10.7 48 0 37.3 0 24z" />
    </Icon>
);

export default CartFlatbedEmpty;