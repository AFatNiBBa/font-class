
import { Icon } from "../../index";

/**
 * A component that renders the `shop-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop-slash?s=sharp-solid shop-slash}
 * @preview ![shop-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shop-slash.svg)
 */
const ShopSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 192l0-64 15.1-20.1L121.8 192 0 192zm276.6 0L320 225.7l0-1.7 64 0 0 51.4 128 99.4L512 224l64 0 0 200.4 44.9 34.9 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7L71.5 32.7 96 0 544 0l96 128 0 64-363.4 0zM320 384l0-35.9 64 50.4L384 512 64 512l0-128 0-160 64 0 0 160 192 0z" />
    </Icon>
);

export default ShopSlash;