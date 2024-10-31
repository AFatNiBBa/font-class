
import { Icon } from "../../index";

/**
 * A component that renders the `rss` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rss?s=sharp-light rss}
 * @preview ![rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rss.svg)
 */
const Rss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480C448 232.6 247.4 32 0 32L0 64c229.8 0 416 186.2 416 416l32 0zM0 208c150.2 0 272 121.8 272 272l32 0C304 312.1 167.9 176 0 176l0 32zM32 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0A64 64 0 1 0 0 416a64 64 0 1 0 128 0z" />
    </Icon>
);

export default Rss;