
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-star` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-star?s=sharp-duotone-solid circle-star}
 * @preview ![circle-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-star.svg)
 */
const CircleStar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm103.8-49.4L209 191.3 256 96l47 95.3 105.1 15.3-76.1 74.2 18 104.7L256 336l-94 49.4 18-104.7-76.1-74.2z" />
        <path d="M256 96l47 95.3 105.1 15.3-76.1 74.2 18 104.7L256 336l-94 49.4 18-104.7-76.1-74.2L209 191.3 256 96z" />
    </Icon>
);

export default CircleStar;