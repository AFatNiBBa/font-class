
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-flatbed-boxes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed-boxes?s=sharp-duotone-solid cart-flatbed-boxes}
 * @preview ![cart-flatbed-boxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cart-flatbed-boxes.svg)
 */
const CartFlatbedBoxes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 464c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16l-90.5 0c-1.8 5-2.7 10.4-2.7 16zM192 32l0 288 192 0 0-288L192 32zm224 0l0 128 128 0 0-128L416 32zm0 160l0 128 192 0 0-128-192 0zm32 272c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16l-90.5 0c-1.8 5-2.7 10.4-2.7 16z" />
        <path d="M0 0L32 0 96 0l32 0 0 32 0 352 480 0 32 0 0 64-32 0L96 448l-32 0 0-32L64 64 32 64 0 64 0 0z" />
    </Icon>
);

export default CartFlatbedBoxes;