
import { Icon } from "../../index";

/**
 * A component that renders the `cart-circle-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-circle-check?s=sharp-solid cart-circle-check}
 * @preview ![cart-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cart-circle-check.svg)
 */
const CartCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 52.1 0 60.3 316.5 3.7 19.5 19.9 0 160.7 0c-.5-5.3-.7-10.6-.7-16c0-10.9 1-21.6 2.9-32l-143 0-9.1-48 168.5 0c29.1-57 88.4-96 156.8-96c10 0 19.7 .8 29.2 2.4L576 32 122 32l-2.4-12.5L115.9 0 96 0 24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-65.4-32l-11.3 11.3-72 72L480 430.6l-11.3-11.3-40-40L417.4 368 440 345.4l11.3 11.3L480 385.4l60.7-60.7L552 313.4 574.6 336z" />
    </Icon>
);

export default CartCircleCheck;