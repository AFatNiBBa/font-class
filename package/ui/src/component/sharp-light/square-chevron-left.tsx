
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-left?s=sharp-light square-chevron-left}
 * @preview ![square-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-chevron-left.svg)
 */
const SquareChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 448l384 0 0-384L32 64l0 384zM0 480l0-32L0 64 0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480zM132.7 244.7l112-112L256 121.4 278.6 144l-11.3 11.3L166.6 256 267.3 356.7 278.6 368 256 390.6l-11.3-11.3-112-112L121.4 256l11.3-11.3z" />
    </Icon>
);

export default SquareChevronLeft;