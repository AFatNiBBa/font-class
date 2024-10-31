
import { Icon } from "../../index";

/**
 * A component that renders the `cart-flatbed` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed?s=sharp-light cart-flatbed}
 * @preview ![cart-flatbed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cart-flatbed.svg)
 */
const CartFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L16 0l96 0 16 0 0 16 0 368 96 0 288 0 112 0 16 0 0 32-16 0-56.6 0c5.4 9.4 8.6 20.3 8.6 32c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-11.7 3.1-22.6 8.6-32l-177.1 0c5.4 9.4 8.6 20.3 8.6 32c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-11.7 3.1-22.6 8.6-32L112 416l-16 0 0-16L96 32 16 32 0 32 0 0zM512 416a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM192 448a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM320 64l-96 0 0 224 352 0 0-224-96 0 0 106.7 0 37.3-32-19.2L400 160l-48 28.8L320 208l0-37.3L320 64zm0-32l32 0 96 0 32 0 96 0 32 0 0 32 0 224 0 32-32 0-352 0-32 0 0-32 0-224 0-32 32 0 96 0zm32 32l0 87.5 31.5-18.9 16.5-9.9 16.5 9.9L448 151.5 448 64l-96 0z" />
    </Icon>
);

export default CartFlatbed;