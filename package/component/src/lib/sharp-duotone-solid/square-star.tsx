
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-star` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-star?s=sharp-duotone-solid square-star}
 * @preview ![square-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-star.svg)
 */
const SquareStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM71.8 206.6L177 191.3 224 96l47 95.3 105.1 15.3-76.1 74.2 18 104.7L224 336l-94 49.4 18-104.7L71.8 206.6z" />
        <path d="M224 96l47 95.3 105.1 15.3-76.1 74.2 18 104.7L224 336l-94 49.4 18-104.7L71.8 206.6 177 191.3 224 96z" />
    </Icon>
);

export default SquareStar;