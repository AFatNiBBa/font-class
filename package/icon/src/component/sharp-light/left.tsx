
import { Icon } from "../../index";

/**
 * A component that renders the `left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left?s=sharp-light left}
 * @preview ![left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/left.svg)
 */
const Left: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 208l32 0 176 0 0 96-176 0-32 0 0 32 0 80-2.7 0L45.2 256l160-160 2.7 0 0 80 0 32zM192 64L22.6 233.4 0 256l22.6 22.6L192 448l16 0 32 0 0-32 0-48 0-32 32 0 144 0 32 0 0-32 0-96 0-32-32 0-144 0-32 0 0-32 0-48 0-32-32 0-16 0z" />
    </Icon>
);

export default Left;