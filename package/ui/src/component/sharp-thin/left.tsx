
import { Icon } from "../../index";

/**
 * A component that renders the `left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left?s=sharp-thin left}
 * @preview ![left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/left.svg)
 */
const Left: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 304l16 0 208 0 0-96-208 0-16 0 0-16 0-112-9.4 0L22.6 256l176 176 9.4 0 0-112 0-16zM192 448L11.3 267.3 0 256l11.3-11.3L192 64l16 0 16 0 0 16 0 96 0 16 16 0 192 0 16 0 0 16 0 96 0 16-16 0-192 0-16 0 0 16 0 96 0 16-16 0-16 0z" />
    </Icon>
);

export default Left;