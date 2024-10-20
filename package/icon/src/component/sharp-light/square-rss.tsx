
import { Icon } from "../../index";

/**
 * A component that renders the `square-rss` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-rss?s=sharp-light square-rss}
 * @preview ![square-rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-rss.svg)
 */
const SquareRss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32zm80 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM64 160c141.4 0 256 114.6 256 256l32 0c0-159.1-128.9-288-288-288l0 32zM256 416c0-106-86-192-192-192l0 32c88.4 0 160 71.6 160 160l32 0z" />
    </Icon>
);

export default SquareRss;