
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone?s=sharp-regular circle-phone}
 * @preview ![circle-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-phone.svg)
 */
const CirclePhone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM200 128l-72 16 0 16c0 123.7 100.3 224 224 224l16 0 16-72-72-40-33.5 41.9c-34.2-18.1-62.3-46.2-80.4-80.4L240 200l-40-72z" />
    </Icon>
);

export default CirclePhone;