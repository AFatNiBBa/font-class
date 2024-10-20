
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond-half-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half-stroke?s=sharp-duotone-solid diamond-half-stroke}
 * @preview ![diamond-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diamond-half-stroke.svg)
 */
const DiamondHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0l0 90.5L421.5 256 256 421.5l0 90.5 45.3-45.3L466.7 301.3 512 256l-45.3-45.3L301.3 45.3 256 0z" />
        <path d="M256 0L0 256 256 512 256 0z" />
    </Icon>
);

export default DiamondHalfStroke;