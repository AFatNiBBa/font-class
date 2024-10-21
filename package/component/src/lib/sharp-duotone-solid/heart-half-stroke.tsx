
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=sharp-duotone-solid heart-half-stroke}
 * @preview ![heart-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/heart-half-stroke.svg)
 */
const HeartHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 96c0 30.2 0 60.4 0 90.5l45.3-45.3L325.5 117c13.5-13.5 31.7-21 50.7-21c39.6 0 71.8 32.1 71.8 71.8c0 19-7.6 37.3-21 50.7l-24.2 24.2L256 389.5c0 30.2 0 60.3 0 90.5c15.1-15.1 30.2-30.2 45.3-45.2L448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8C272.2 79.9 264.1 87.9 256 96z" />
        <path d="M39.8 263.8L256 480V96L231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96z" />
    </Icon>
);

export default HeartHalfStroke;