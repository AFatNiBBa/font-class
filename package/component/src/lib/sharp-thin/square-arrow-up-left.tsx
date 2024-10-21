
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-up-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up-left?s=sharp-thin square-arrow-up-left}
 * @preview ![square-arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-arrow-up-left.svg)
 */
const SquareArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM136 160l144 0 8 0 0 16-8 0-124.7 0L317.7 338.3l5.7 5.7L312 355.3l-5.7-5.7L144 187.3 144 312l0 8-16 0 0-8 0-144 0-8 8 0z" />
    </Icon>
);

export default SquareArrowUpLeft;