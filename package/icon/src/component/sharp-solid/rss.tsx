
import { Icon } from "../../index";

/**
 * A component that renders the `rss` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rss?s=sharp-solid rss}
 * @preview ![rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rss.svg)
 */
const Rss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480C448 232.6 247.4 32 0 32L0 96c212.1 0 384 171.9 384 384l64 0zM0 160l0 64c141.4 0 256 114.6 256 256l64 0C320 303.3 176.7 160 0 160zM128 416A64 64 0 1 0 0 416a64 64 0 1 0 128 0z" />
    </Icon>
);

export default Rss;