
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half-stroke` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half-stroke?s=sharp-solid diamond-half-stroke}
 * @preview ![diamond-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diamond-half-stroke.svg)
 */
const DiamondHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256l45.3 45.3L210.7 466.7 256 512l45.3-45.3L466.7 301.3 512 256l-45.3-45.3L301.3 45.3 256 0 210.7 45.3 45.3 210.7 0 256zM256 421.5l0-331L421.5 256 256 421.5z" />
    </Icon>
);

export default DiamondHalfStroke;