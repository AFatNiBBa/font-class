
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-up-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up-right?s=sharp-light square-arrow-up-right}
 * @preview ![square-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-arrow-up-right.svg)
 */
const SquareArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zm32-32l-32 0L32 32 0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32zM304 160l-136 0-16 0 0 32 16 0 97.4 0L132.7 324.7 121.4 336 144 358.6l11.3-11.3L288 214.6 288 320l0 16 32 0 0-16 0-144 0-16-16 0z" />
    </Icon>
);

export default SquareArrowUpRight;