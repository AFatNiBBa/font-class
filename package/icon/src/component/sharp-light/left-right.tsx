
import { Icon } from "../../index";

/**
 * A component that renders the `left-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-right?s=sharp-light left-right}
 * @preview ![left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/left-right.svg)
 */
const LeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 352l0-32 32 0 128 0 32 0 0 32 0 32 32 0L489.4 278.6 512 256l-22.6-22.6L384 128l-32 0 0 32 0 32-32 0-128 0-32 0 0-32 0-32-32 0L22.6 233.4 0 256l22.6 22.6L128 384l32 0 0-32zm-32-13.3L45.3 256 128 173.3l0 18.7 0 32 32 0 192 0 32 0 0-32 0-18.7L466.7 256 384 338.7l0-18.7 0-32-32 0-192 0-32 0 0 32 0 18.7z" />
    </Icon>
);

export default LeftRight;