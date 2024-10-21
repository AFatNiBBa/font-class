
import { Icon } from "../../index";

/**
 * A component that renders the `circle-star` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-star?s=regular circle-star}
 * @preview ![circle-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-star.svg)
 */
const CircleStar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-391c-6.1 0-11.7 3.5-14.3 8.9l-31.3 63.3-69.9 10.2c-6 .9-11 5.1-12.9 10.9s-.3 12.2 4 16.4L182.2 280l-11.9 69.6c-1 6 1.4 12.1 6.4 15.6s11.5 4.1 16.9 1.2L256 333.6l62.5 32.9c5.4 2.8 11.9 2.4 16.8-1.2s7.4-9.6 6.4-15.6L329.8 280l50.6-49.3c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9l-69.9-10.2-31.3-63.3c-2.7-5.5-8.3-8.9-14.3-8.9z" />
    </Icon>
);

export default CircleStar;