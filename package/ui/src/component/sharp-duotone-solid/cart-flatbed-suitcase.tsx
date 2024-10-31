
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-flatbed-suitcase` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed-suitcase?s=sharp-duotone-solid cart-flatbed-suitcase}
 * @preview ![cart-flatbed-suitcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cart-flatbed-suitcase.svg)
 */
const CartFlatbedSuitcase: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 464c0-5.6 1-11 2.7-16l90.5 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48zM192 96l64 0 0 224-64 0 0-224zM288 0l24 0L456 0l24 0 0 24 0 72 0 224-192 0 0-224 0-72 0-24zm48 48l0 48 96 0 0-48-96 0zM448 464c0-5.6 1-11 2.7-16l90.5 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48zM512 96l64 0 0 224-64 0 0-224z" />
        <path d="M32 0L0 0 0 64l32 0 32 0 0 352 0 32 32 0 512 0 32 0 0-64-32 0-480 0 0-352 0-32L96 0 32 0zM256 96l0 224 32 0 0-224-32 0zm224 0l0 224 32 0 0-224-32 0z" />
    </Icon>
);

export default CartFlatbedSuitcase;