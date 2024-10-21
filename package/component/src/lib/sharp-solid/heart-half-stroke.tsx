
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=sharp-solid heart-half-stroke}
 * @preview ![heart-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/heart-half-stroke.svg)
 */
const HeartHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 389.5L402.7 242.8 427 218.5c13.5-13.5 21-31.7 21-50.7c0-39.6-32.1-71.8-71.8-71.8c-19 0-37.3 7.6-50.7 21l-24.2 24.2L256 186.5l0 203zM256 96l24.2-24.2c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L448 288 301.3 434.8 256 480l-45.3-45.3L64 288 39.8 263.8C14.3 238.3 0 203.8 0 167.8c0 0 0 0 0 0s0 0 0 0C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8L256 96s0 0 0 0z" />
    </Icon>
);

export default HeartHalfStroke;