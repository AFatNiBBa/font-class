
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-right?s=sharp-light square-arrow-down-right}
 * @preview ![square-arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-arrow-down-right.svg)
 */
const SquareArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 448l0-384L32 64l0 384 384 0zm32 32l-32 0L32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0 0 32 0 384 0 32zM304 352l-136 0-16 0 0-32 16 0 97.4 0L132.7 187.3 121.4 176 144 153.4l11.3 11.3L288 297.4 288 192l0-16 32 0 0 16 0 144 0 16-16 0z" />
    </Icon>
);

export default SquareArrowDownRight;