
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shop-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop-lock?s=sharp-duotone-solid shop-lock}
 * @preview ![shop-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shop-lock.svg)
 */
const ShopLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144l0 48 449.6 0c20.2-19.8 47.9-32 78.4-32s58.2 12.2 78.4 32l33.6 0 0-48L544 0 96 0 0 144zm64 80l0 160 0 128 320 0 0-128 0-96 0-64-64 0 0 160-192 0 0-160-64 0z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default ShopLock;