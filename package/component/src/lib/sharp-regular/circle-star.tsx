
import { Icon } from "../../index";

/**
 * A component that renders the `circle-star` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-star?s=sharp-regular circle-star}
 * @preview ![circle-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-star.svg)
 */
const CircleStar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm42.3-314.2L256 112l-42.3 85.8L119 211.5l68.5 66.7-16.2 94.2L256 328l84.6 44.5-16.2-94.2L393 211.5l-94.6-13.8z" />
    </Icon>
);

export default CircleStar;