
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-left?s=sharp-thin square-arrow-down-left}
 * @preview ![square-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-arrow-down-left.svg)
 */
const SquareArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 464L16 48l416 0 0 416L16 464zM0 480l16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32 0 32 0 48 0 464l0 16zM136 352l144 0 8 0 0-16-8 0-124.7 0L317.7 173.7l5.7-5.7L312 156.7l-5.7 5.7L144 324.7 144 200l0-8-16 0 0 8 0 144 0 8 8 0z" />
    </Icon>
);

export default SquareArrowDownLeft;