
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-minus?s=sharp-duotone-solid cart-minus}
 * @preview ![cart-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cart-minus.svg)
 */
const CartMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M122 32c16.3 85.3 32.5 170.7 48.8 256L496 288 576 32 122 32zM256 140l160 0 0 40-160 0 0-40z" />
        <path d="M24 0L0 0 0 48l24 0 52.1 0 60.3 316.5 3.7 19.5 19.9 0 328 0 24 0 0-48-24 0-308.1 0L119.6 19.5 115.9 0 96 0 24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM256 180l160 0 0-40-160 0 0 40z" />
    </Icon>
);

export default CartMinus;