
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone-flip` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-flip?s=sharp-regular circle-phone-flip}
 * @preview ![circle-phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-phone-flip.svg)
 */
const CirclePhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm56 128l72 16 0 16c0 123.7-100.3 224-224 224l-16 0-16-72 72-40 33.5 41.9c34.2-18.1 62.3-46.2 80.4-80.4L272 200l40-72z" />
    </Icon>
);

export default CirclePhoneFlip;