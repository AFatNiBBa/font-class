
import { Icon } from "../../index";

/**
 * A component that renders the `rss` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rss?s=sharp-regular rss}
 * @preview ![rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rss.svg)
 */
const Rss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480C448 232.6 247.4 32 0 32L0 80c220.9 0 400 179.1 400 400l48 0zm-144 0C304 312.1 167.9 176 0 176l0 48c141.4 0 256 114.6 256 256l48 0zM48 416a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80 0A64 64 0 1 0 0 416a64 64 0 1 0 128 0z" />
    </Icon>
);

export default Rss;