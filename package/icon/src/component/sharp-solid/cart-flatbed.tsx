
import { Icon } from "../../index";

/**
 * A component that renders the `cart-flatbed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed?s=sharp-solid cart-flatbed}
 * @preview ![cart-flatbed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cart-flatbed.svg)
 */
const CartFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 0L0 0 0 64l32 0 32 0 0 352 0 32 32 0 66.7 0c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16l197.5 0c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16l66.7 0 32 0 0-64-32 0-480 0 0-352 0-32L96 0 32 0zM192 32l0 288 416 0 0-288L464 32l0 160-64-48-64 48 0-160L192 32z" />
    </Icon>
);

export default CartFlatbed;