
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-xmark?s=sharp-duotone-solid cart-xmark}
 * @preview ![cart-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cart-xmark.svg)
 */
const CartXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M122 32l48.8 256L496 288 576 32 122 32zm143.3 85.6l28.3-28.3L336 131.7l42.4-42.4 28.3 28.3L364.3 160l42.4 42.4-28.3 28.3L336 188.3l-42.4 42.4-28.3-28.3L307.7 160l-42.4-42.4z" />
        <path d="M24 0L0 0 0 48l24 0 52.1 0 60.3 316.5 3.7 19.5 19.9 0 328 0 24 0 0-48-24 0-308.1 0L119.6 19.5 115.9 0 96 0 24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM378.4 89.3L336 131.7 293.6 89.3l-28.3 28.3L307.7 160l-42.4 42.4 28.3 28.3L336 188.3l42.4 42.4 28.3-28.3L364.3 160l42.4-42.4L378.4 89.3z" />
    </Icon>
);

export default CartXmark;