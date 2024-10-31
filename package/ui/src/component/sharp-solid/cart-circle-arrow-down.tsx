
import { Icon } from "../../index";

/**
 * A component that renders the `cart-circle-arrow-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-circle-arrow-down?s=sharp-solid cart-circle-arrow-down}
 * @preview ![cart-circle-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cart-circle-arrow-down.svg)
 */
const CartCircleArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 52.1 0 60.3 316.5 3.7 19.5 19.9 0 160.7 0c-.5-5.3-.7-10.6-.7-16c0-10.9 1-21.6 2.9-32l-143 0-9.1-48 168.5 0c29.1-57 88.4-96 156.8-96c10 0 19.7 .8 29.2 2.4L576 32 122 32l-2.4-12.5L115.9 0 96 0 24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm320 0a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm78.6-136l-11.3 11.3-56 56L496 454.6l-11.3-11.3-56-56L417.4 376 440 353.4l11.3 11.3L480 393.4l0-89.4 0-16 32 0 0 16 0 89.4 28.7-28.7L552 353.4 574.6 376z" />
    </Icon>
);

export default CartCircleArrowDown;