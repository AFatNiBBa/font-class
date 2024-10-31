
import { Icon } from "../../index";

/**
 * A component that renders the `heart-crack` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-crack?s=sharp-regular heart-crack}
 * @preview ![heart-crack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/heart-crack.svg)
 */
const HeartCrack: typeof Icon = x => (
    <Icon {...x}>
        <path d="M230.1 137.9L160 208 288 320 224 208l96-80-6.2-21.9 .4-.4C330.6 89.3 353 80 376.2 80c48.5 0 87.8 39.3 87.8 87.8c0 23.3-9.2 45.6-25.7 62.1l-24.2 24.2L256 412.1 97.9 254.1 73.7 229.8C57.2 213.4 48 191.1 48 167.8C48 119.3 87.3 80 135.8 80c23.3 0 45.6 9.2 62.1 25.7L222.1 130l8 8zM256 480l33.9-33.9L448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.7c0 0 0 0 0 0L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96L64 288 222.1 446.1 256 480z" />
    </Icon>
);

export default HeartCrack;