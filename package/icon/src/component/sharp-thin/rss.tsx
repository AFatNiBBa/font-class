
import { Icon } from "../../index";

/**
 * A component that renders the `rss` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rss?s=sharp-thin rss}
 * @preview ![rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rss.svg)
 */
const Rss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480C448 232.6 247.4 32 0 32L0 48c238.6 0 432 193.4 432 432l16 0zM0 192c159.1 0 288 128.9 288 288l16 0C304 312.1 167.9 176 0 176l0 16zM16 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 0 416a64 64 0 1 0 128 0z" />
    </Icon>
);

export default Rss;