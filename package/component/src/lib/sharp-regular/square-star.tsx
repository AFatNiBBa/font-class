
import { Icon } from "../../index";

/**
 * A component that renders the `square-star` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-star?s=sharp-regular square-star}
 * @preview ![square-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-star.svg)
 */
const SquareStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM271 191.3l105.1 15.3-76.1 74.2 18 104.7L224 336l-94 49.4 18-104.7L71.8 206.6 177 191.3 224 96l47 95.3z" />
    </Icon>
);

export default SquareStar;