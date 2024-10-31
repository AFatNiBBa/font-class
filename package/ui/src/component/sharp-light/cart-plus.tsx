
import { Icon } from "../../index";

/**
 * A component that renders the `cart-plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-plus?s=sharp-light cart-plus}
 * @preview ![cart-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cart-plus.svg)
 */
const CartPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 0L0 0 0 32l16 0 51.2 0 77.2 339.5 2.8 12.5 12.8 0 336 0 16 0 0-32-16 0-323.2 0-14.5-64L488 288l12 0 3.4-11.5L575.3 32l-33.4 0L476 256 151 256 95.6 12.5 92.8 0 80 0 16 0zM160 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm216-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM240 112l0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48 0-16-32 0 0 16 0 48-48 0-16 0z" />
    </Icon>
);

export default CartPlus;