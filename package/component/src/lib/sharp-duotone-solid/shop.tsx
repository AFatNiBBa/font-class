
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop?s=sharp-duotone-solid shop}
 * @preview ![shop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shop.svg)
 */
const Shop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 192l0 32 0 160 0 128 320 0 0-128 0-160 128 0 0 288 64 0 0-320-32 0-32 0L64 192zm64 32l192 0 0 160-192 0 0-160z" />
        <path d="M640 192H0V128L96 0H544l96 128v64z" />
    </Icon>
);

export default Shop;