
import { Icon } from "../../index";

/**
 * A component that renders the `cart-flatbed` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed?s=sharp-thin cart-flatbed}
 * @preview ![cart-flatbed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cart-flatbed.svg)
 */
const CartFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M8 0L0 0 0 16l8 0 104 0 0 408 0 8 8 0 68.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 26.5 21.5 48 48 48s48-21.5 48-48c0-12.3-4.6-23.5-12.2-32l216.4 0c-7.6 8.5-12.2 19.7-12.2 32c0 26.5 21.5 48 48 48s48-21.5 48-48c0-12.3-4.6-23.5-12.2-32l84.2 0 8 0 0-16-8 0-120 0-288 0-96 0L128 8l0-8-8 0L8 0zM544 464a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM224 496a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM592 80l0 256-384 0 0-256 128 0 0 124 0 20 16-12 48-36 48 36 16 12 0-20 0-124 128 0zM352 80l96 0 0 112-38.4-28.8L400 156l-9.6 7.2L352 192l0-112zM592 64L464 64l-16 0-96 0-16 0L208 64l-16 0 0 16 0 256 0 16 16 0 384 0 16 0 0-16 0-256 0-16-16 0z" />
    </Icon>
);

export default CartFlatbed;