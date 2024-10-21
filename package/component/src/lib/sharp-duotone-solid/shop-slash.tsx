
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shop-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop-slash?s=sharp-duotone-solid shop-slash}
 * @preview ![shop-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shop-slash.svg)
 */
const ShopSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128l15.1-20.1L121.8 192 0 192l0-64zm64 96l64 0 0 160 192 0 0-35.9 64 50.4L384 512 64 512l0-128 0-160zM71.5 32.7L96 0 544 0l96 128 0 64-363.4 0C208.3 138.9 139.9 85.8 71.5 32.7zM320 224l64 0 0 51.4-64-49.7 0-1.7zm192 0l64 0 0 200.4c-21.3-16.6-42.7-33.1-64-49.7L512 224z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default ShopSlash;