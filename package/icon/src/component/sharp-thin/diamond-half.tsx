
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half?s=sharp-thin diamond-half}
 * @preview ![diamond-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diamond-half.svg)
 */
const DiamondHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M244.7 11.3L256 0l0 16 0 6.6 0 466.7 0 6.6 0 16-11.3-11.3L240 496 11.3 267.3 0 256l11.3-11.3L240 16l4.7-4.7zM240 38.6L22.6 256 240 473.4l0-434.7z" />
    </Icon>
);

export default DiamondHalf;