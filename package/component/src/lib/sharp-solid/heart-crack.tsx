
import { Icon } from "../../index";

/**
 * A component that renders the `heart-crack` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-crack?s=sharp-solid heart-crack}
 * @preview ![heart-crack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/heart-crack.svg)
 */
const HeartCrack: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 208l64 112L160 208l80-80L175.7 38c-12.8-4-26.3-6-40-6C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96L64 288 256 480 448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-27.6 0-54.4 8.4-76.8 23.8L320 128l-96 80z" />
    </Icon>
);

export default HeartCrack;