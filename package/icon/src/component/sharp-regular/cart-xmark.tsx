
import { Icon } from "../../index";

/**
 * A component that renders the `cart-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-xmark?s=sharp-regular cart-xmark}
 * @preview ![cart-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cart-xmark.svg)
 */
const CartXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 52.1 0 60.3 316.5 3.7 19.5 19.9 0 328 0 24 0 0-48-24 0-308.1 0-9.1-48L480 288l17.8 0 5.2-17L575.4 32l-50.2 0-63 208-300.6 0-42-220.5L115.9 0 96 0 24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM274.7 48.8L240.8 82.7l17 17L286.1 128l-28.3 28.3-17 17 33.9 33.9 17-17L320 161.9l28.3 28.3 17 17 33.9-33.9-17-17L353.9 128l28.3-28.3 17-17L365.3 48.8l-17 17L320 94.1 291.7 65.8l-17-17z" />
    </Icon>
);

export default CartXmark;