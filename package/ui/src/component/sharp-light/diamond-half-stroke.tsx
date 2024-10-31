
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half-stroke` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half-stroke?s=sharp-light diamond-half-stroke}
 * @preview ![diamond-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/diamond-half-stroke.svg)
 */
const DiamondHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M22.6 278.6L0 256l22.6-22.6L233.4 22.6 240 16 256 0l16 16 6.6 6.6L489.4 233.4 512 256l-22.6 22.6L278.6 489.4 272 496l-16 16-16-16-6.6-6.6L22.6 278.6zM272 450.7L466.7 256 272 61.3l0 389.5zM240 61.3L45.3 256 240 450.7l0-389.5z" />
    </Icon>
);

export default DiamondHalfStroke;