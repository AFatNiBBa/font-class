
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-crack` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-crack?s=sharp-duotone-solid heart-crack}
 * @preview ![heart-crack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/heart-crack.svg)
 */
const HeartCrack: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 167.8c0 36 14.3 70.5 39.8 96L64 288 256 480 448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-27.6 0-54.4 8.4-76.8 23.8C306.3 79.9 313.1 104 320 128c-32 26.7-64 53.3-96 80c21.3 37.3 42.7 74.7 64 112c-42.7-37.3-85.3-74.7-128-112c26.7-26.7 53.3-53.3 80-80c-21.4-30-42.8-60-64.3-90c-12.8-4-26.3-6-40-6C60.8 32 0 92.8 0 167.8z" />
        <path d="M224 208l64 112L160 208l80-80L175.7 38c21 6.5 40.2 18 56 33.7L256 96l24.2-24.2c5.9-5.9 12.3-11.2 19.2-15.9L320 128l-96 80z" />
    </Icon>
);

export default HeartCrack;