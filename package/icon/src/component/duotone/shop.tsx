
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop?s=duotone shop}
 * @preview ![shop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shop.svg)
 */
const Shop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 192l32 0 32 0 192 0 64 0 128 0 32 0 32 0 0 288c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-256-128 0 0 160 0 80c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-80 0-192zm64 32l0 160 192 0 0-160-192 0z" />
        <path d="M603.2 192H36.8C16.5 192 0 175.5 0 155.2c0-7.3 2.2-14.4 6.2-20.4L81.8 21.4C90.7 8 105.6 0 121.7 0H518.3c16.1 0 31 8 39.9 21.4l75.6 113.3c4 6.1 6.2 13.2 6.2 20.4c0 20.3-16.5 36.8-36.8 36.8z" />
    </Icon>
);

export default Shop;