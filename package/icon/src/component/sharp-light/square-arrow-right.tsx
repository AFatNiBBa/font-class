
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-right?s=sharp-light square-arrow-right}
 * @preview ![square-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-arrow-right.svg)
 */
const SquareArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64L32 64l0 384 384 0 0-384zm32-32l0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0zM347.3 267.3l-96 96L240 374.6 217.4 352l11.3-11.3L297.4 272 112 272l-16 0 0-32 16 0 185.4 0-68.7-68.7L217.4 160 240 137.4l11.3 11.3 96 96L358.6 256l-11.3 11.3z" />
    </Icon>
);

export default SquareArrowRight;