
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=sharp-regular heart-half}
 * @preview ![heart-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/heart-half.svg)
 */
const HeartHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480l0-67.9L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96L208 432l48 48zM208 364.1L73.7 229.8C57.2 213.4 48 191 48 167.8C48 119.3 87.3 80 135.8 80c23.3 0 45.6 9.2 62.1 25.7L208 115.9l0 248.2z" />
    </Icon>
);

export default HeartHalf;