
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rss` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rss?s=sharp-duotone-solid rss}
 * @preview ![rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rss.svg)
 */
const Rss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96c212.1 0 384 171.9 384 384l64 0C448 232.6 247.4 32 0 32zM0 160l0 64c141.4 0 256 114.6 256 256l64 0C320 303.3 176.7 160 0 160z" />
        <path d="M0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416z" />
    </Icon>
);

export default Rss;