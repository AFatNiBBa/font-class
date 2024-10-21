
import { Icon } from "../../index";

/**
 * A component that renders the `shop-lock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop-lock?s=light shop-lock}
 * @preview ![shop-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shop-lock.svg)
 */
const ShopLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 185.8c0-6.4 1.6-12.7 4.7-18.3L82.4 25C90.8 9.6 106.9 0 124.5 0l391 0c17.6 0 33.7 9.6 42.1 25l77.7 142.4c3.1 5.6 4.7 11.9 4.7 18.3c0 12.4-5.9 23.3-14.9 30.3c-5.4-9.3-12.1-17.8-19.8-25.2c1.6-1.1 2.7-3 2.7-5.2c0-1-.3-2.1-.8-3L529.6 40.3c-2.8-5.1-8.2-8.3-14-8.3l-391 0c-5.9 0-11.2 3.2-14 8.3L32.8 182.8c-.5 .9-.8 1.9-.8 3c0 3.4 2.8 6.2 6.2 6.2L80 192l369.6 0c-9.4 9.2-17.1 20-22.8 32L96 224l0 128 256 0 0-80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 79.6 0 .4 0 112.3c-.2 26.4-21.6 47.7-48 47.7l-224 0c-26.5 0-48-21.5-48-48l0-240-25.8 0C17.1 224 0 206.9 0 185.8zM96 464c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-80L96 384l0 80zM528 224c-26.5 0-48 21.5-48 48l0 48 96 0 0-48c0-26.5-21.5-48-48-48zm-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48zm0 80l0 128 160 0 0-128-160 0z" />
    </Icon>
);

export default ShopLock;