
import { Icon } from "../../index";

/**
 * A component that renders the `cart-arrow-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-arrow-down?s=thin cart-arrow-down}
 * @preview ![cart-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cart-arrow-down.svg)
 */
const CartArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 8C0 3.6 3.6 0 8 0L45.7 0C64.8 0 81.2 13.5 84.9 32.3L131.8 272l342.1 0c18.6 0 34.7-12.8 39-30.9L560.2 38.2c1-4.3 5.3-7 9.6-6s7 5.3 6 9.6L528.4 244.7c-5.9 25.3-28.5 43.3-54.5 43.3l-339 0 9.3 47.7c3.7 18.8 20.1 32.3 39.3 32.3L504 368c4.4 0 8 3.6 8 8s-3.6 8-8 8l-320.5 0c-26.8 0-49.8-19-55-45.2L69.2 35.4C67 24.1 57.1 16 45.7 16L8 16c-4.4 0-8-3.6-8-8zM176 496a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm320 48a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-80 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM328 8l0 172.7 66.3-66.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-80 80c-3.1 3.1-8.2 3.1-11.3 0l-80-80c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L312 180.7 312 8c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default CartArrowDown;