
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-arrow-down?s=sharp-duotone-solid cart-arrow-down}
 * @preview ![cart-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cart-arrow-down.svg)
 */
const CartArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M122 32l48.8 256L496 288 576 32 360 32c0 36.7 0 73.4 0 110.1c7.7-7.7 15.4-15.4 23-23c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9l-17 17-64 64c-5.7 5.7-11.3 11.3-17 17c-5.7-5.7-11.3-11.3-17-17l-64-64c-5.7-5.7-11.3-11.3-17-17L272 102.1l17 17c7.7 7.7 15.4 15.4 23 23c0-36.7 0-73.4 0-110.1L122 32z" />
        <path d="M24 0L0 0 0 48l24 0 52.1 0 60.3 316.5 3.7 19.5 19.9 0 328 0 24 0 0-48-24 0-308.1 0L119.6 19.5 115.9 0 96 0 24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM360 142.1L360 32l-48 0 0 110.1-23-23-17-17L238.1 136l17 17 64 64 17 17 17-17 64-64 17-17L400 102.1l-17 17-23 23z" />
    </Icon>
);

export default CartArrowDown;