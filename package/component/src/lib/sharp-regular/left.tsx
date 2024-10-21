
import { Icon } from "../../index";

/**
 * A component that renders the `left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left?s=sharp-regular left}
 * @preview ![left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/left.svg)
 */
const Left: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 288l48 0 144 0 0-64-144 0-48 0 0-48 0-60.1L67.9 256 208 396.1l0-60.1 0-48zm48 112l0 48-48 0-16 0L33.9 289.9 0 256l33.9-33.9L192 64l16 0 48 0 0 48 0 16 0 48 48 0 96 0 48 0 0 48 0 64 0 48-48 0-96 0-48 0 0 48 0 16z" />
    </Icon>
);

export default Left;