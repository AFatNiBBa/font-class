
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half-stroke` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half-stroke?s=sharp-thin diamond-half-stroke}
 * @preview ![diamond-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diamond-half-stroke.svg)
 */
const DiamondHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M11.3 267.3L0 256l11.3-11.3L244.7 11.3 256 0l11.3 11.3L500.7 244.7 512 256l-11.3 11.3L267.3 500.7 256 512l-11.3-11.3L11.3 267.3zM248 481.4l0-450.7L22.6 256 248 481.4zm16 0L489.4 256 264 30.6l0 450.7z" />
    </Icon>
);

export default DiamondHalfStroke;