
import { Icon } from "../../index";

/**
 * A component that renders the `shop-lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop-lock?s=sharp-regular shop-lock}
 * @preview ![shop-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shop-lock.svg)
 */
const ShopLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M515.5 48l69.6 127.6c19.1 11.3 34.5 28.2 44.1 48.4l10.8 0 0-48L544 0 96 0 0 176l0 48 48 0 16 0 0 264 0 24 24 0 272 0 24 0 0-24 0-264 42.8 0c9.5-20 24.7-36.7 43.5-48L54.7 176 124.5 48l391 0zM336 224l0 96-224 0 0-96 224 0zM112 464l0-96 224 0 0 96-224 0zM528 240c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48-32 0 0 192 224 0 0-192-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default ShopLock;