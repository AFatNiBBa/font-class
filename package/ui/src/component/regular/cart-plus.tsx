
import { Icon } from "../../index";

/**
 * A component that renders the `cart-plus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-plus?s=regular cart-plus}
 * @preview ![cart-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cart-plus.svg)
 */
const CartPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c26.9 0 50 19.1 55 45.5l37 194.5 297.6 0c10.9 0 20.4-7.3 23.2-17.8L528.8 49.8c3.4-12.8 16.6-20.4 29.4-16.9s20.4 16.6 16.9 29.4L528.7 234.7c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM344 48l0 40 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l40 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default CartPlus;