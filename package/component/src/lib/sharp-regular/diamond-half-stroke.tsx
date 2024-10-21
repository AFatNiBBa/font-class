
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half-stroke` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half-stroke?s=sharp-regular diamond-half-stroke}
 * @preview ![diamond-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/diamond-half-stroke.svg)
 */
const DiamondHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M33.9 289.9L0 256l33.9-33.9L222.1 33.9 256 0l33.9 33.9L478.1 222.1 512 256l-33.9 33.9L289.9 478.1 256 512l-33.9-33.9L33.9 289.9zM256 67.9l0 376.2L444.1 256 256 67.9z" />
    </Icon>
);

export default DiamondHalfStroke;