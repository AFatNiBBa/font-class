
import { Icon } from "../../index";

/**
 * A component that renders the `cart-plus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-plus?s=thin cart-plus}
 * @preview ![cart-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cart-plus.svg)
 */
const CartPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8l37.7 0C57.1 16 67 24.1 69.2 35.4l59.4 303.4c5.1 26.3 28.2 45.2 55 45.2L504 384c4.4 0 8-3.6 8-8s-3.6-8-8-8l-320.5 0c-19.1 0-35.6-13.5-39.3-32.3L134.9 288l339 0c26 0 48.6-17.9 54.5-43.3L575.8 41.8c1-4.3-1.7-8.6-6-9.6s-8.6 1.7-9.6 6L512.9 241.1c-4.2 18.1-20.4 30.9-39 30.9l-342.1 0L84.9 32.3C81.2 13.5 64.8 0 45.7 0L8 0zM144 464a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm240-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM232 144c0 4.4 3.6 8 8 8l72 0 0 72c0 4.4 3.6 8 8 8s8-3.6 8-8l0-72 72 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-72 0 0-72c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 72-72 0c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default CartPlus;