
import { Icon } from "../../index";

/**
 * A component that renders the `circle-star` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-star?s=sharp-solid circle-star}
 * @preview ![circle-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-star.svg)
 */
const CircleStar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm47-320.7l105.1 15.3-76.1 74.2 18 104.7L256 336l-94 49.4 18-104.7-76.1-74.2L209 191.3 256 96l47 95.3z" />
    </Icon>
);

export default CircleStar;