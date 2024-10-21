
import { Icon } from "../../index";

/**
 * A component that renders the `cart-flatbed` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed?s=sharp-regular cart-flatbed}
 * @preview ![cart-flatbed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cart-flatbed.svg)
 */
const CartFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 56 0 0 392 0 24 24 0 56 0c0 26.5 21.5 48 48 48s48-21.5 48-48l192 0c0 26.5 21.5 48 48 48s48-21.5 48-48l72 0 24 0 0-48-24 0-120 0-288 0-80 0 0-392 0-24L104 0 24 0zM560 80l0 224-320 0 0-224 96 0 0 112 64-48 64 48 0-112 96 0zm0-48l-96 0L336 32l-96 0-48 0 0 48 0 224 0 48 48 0 320 0 48 0 0-48 0-224 0-48-48 0z" />
    </Icon>
);

export default CartFlatbed;