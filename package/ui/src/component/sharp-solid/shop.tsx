
import { Icon } from "../../index";

/**
 * A component that renders the `shop` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop?s=sharp-solid shop}
 * @preview ![shop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shop.svg)
 */
const Shop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 192l640 0 0-64L544 0 96 0 0 128l0 64zM64 384l0 128 320 0 0-128 0-160-64 0 0 160-192 0 0-160-64 0 0 160zM512 512l64 0 0-288-64 0 0 288z" />
    </Icon>
);

export default Shop;