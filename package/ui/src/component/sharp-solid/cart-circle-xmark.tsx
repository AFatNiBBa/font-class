
import { Icon } from "../../index";

/**
 * A component that renders the `cart-circle-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-circle-xmark?s=sharp-solid cart-circle-xmark}
 * @preview ![cart-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cart-circle-xmark.svg)
 */
const CartCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 52.1 0 60.3 316.5 3.7 19.5 19.9 0 160.7 0c-.5-5.3-.7-10.6-.7-16c0-10.9 1-21.6 2.9-32l-143 0-9.1-48 168.5 0c29.1-57 88.4-96 156.8-96c10 0 19.7 .8 29.2 2.4L576 32 122 32l-2.4-12.5L115.9 0 96 0 24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm320 0a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm59.3-180.7L518.6 368l36.7 36.7L566.6 416 544 438.6l-11.3-11.3L496 390.6l-36.7 36.7L448 438.6 425.4 416l11.3-11.3L473.4 368l-36.7-36.7L425.4 320 448 297.4l11.3 11.3L496 345.4l36.7-36.7L544 297.4 566.6 320l-11.3 11.3z" />
    </Icon>
);

export default CartCircleXmark;