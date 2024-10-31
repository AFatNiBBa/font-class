
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=sharp-light heart-half}
 * @preview ![heart-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/heart-half.svg)
 */
const HeartHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480l0-45.3L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96L224 448l32 32zm-32-77.3L62.4 241.1C42.9 221.7 32 195.3 32 167.8C32 110.5 78.5 64 135.8 64c27.5 0 53.9 10.9 73.4 30.4L224 109.3l0 293.5z" />
    </Icon>
);

export default HeartHalf;