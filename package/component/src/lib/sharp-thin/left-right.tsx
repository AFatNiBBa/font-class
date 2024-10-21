
import { Icon } from "../../index";

/**
 * A component that renders the `left-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-right?s=sharp-thin left-right}
 * @preview ![left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/left-right.svg)
 */
const LeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 320l0-16 16 0 160 0 16 0 0 16 0 48 0 16 16 0 16 0L500.7 267.3 512 256l-11.3-11.3L384 128l-16 0-16 0 0 16 0 48 0 16-16 0-160 0-16 0 0-16 0-48 0-16-16 0-16 0L11.3 244.7 0 256l11.3 11.3L128 384l16 0 16 0 0-16 0-48zm-16 48l-9.4 0L22.6 256l112-112 9.4 0 0 64 0 16 16 0 192 0 16 0 0-16 0-64 9.4 0 112 112-112 112-9.4 0 0-64 0-16-16 0-192 0-16 0 0 16 0 64z" />
    </Icon>
);

export default LeftRight;