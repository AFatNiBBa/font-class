
import { Icon } from "../../index";

/**
 * A component that renders the `cart-flatbed` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed?s=light cart-flatbed}
 * @preview ![cart-flatbed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cart-flatbed.svg)
 */
const CartFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 16C0 7.2 7.2 0 16 0L80 0c26.5 0 48 21.5 48 48l0 320c0 8.8 7.2 16 16 16l80 0 288 0 112 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-56.6 0c5.4 9.4 8.6 20.3 8.6 32c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-11.7 3.1-22.6 8.6-32l-177.1 0c5.4 9.4 8.6 20.3 8.6 32c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-11.7 3.1-22.6 8.6-32L144 416c-26.5 0-48-21.5-48-48L96 48c0-8.8-7.2-16-16-16L16 32C7.2 32 0 24.8 0 16zM512 416a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM192 448a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM320 64l-80 0c-8.8 0-16 7.2-16 16l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192c0-8.8-7.2-16-16-16l-80 0 0 128c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L400 164l-54.4 40.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.3-8.8-14.3l0-128zm32 0l0 96 38.4-28.8c5.7-4.3 13.5-4.3 19.2 0L448 160l0-96-96 0zM240 32l320 0c26.5 0 48 21.5 48 48l0 192c0 26.5-21.5 48-48 48l-320 0c-26.5 0-48-21.5-48-48l0-192c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default CartFlatbed;