
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-flatbed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed?s=sharp-duotone-solid cart-flatbed}
 * @preview ![cart-flatbed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cart-flatbed.svg)
 */
const CartFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 464c0-5.6 1-11 2.7-16l90.5 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48zM192 32l144 0 0 160 64-48 64 48 0-160 144 0 0 288-416 0 0-288zM448 464c0-5.6 1-11 2.7-16l90.5 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48z" />
        <path d="M32 0L0 0 0 64l32 0 32 0 0 352 0 32 32 0 512 0 32 0 0-64-32 0-480 0 0-352 0-32L96 0 32 0zM336 192l64-48 64 48 0-160L336 32l0 160z" />
    </Icon>
);

export default CartFlatbed;