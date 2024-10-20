
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-right?s=sharp-thin square-arrow-down-right}
 * @preview ![square-arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-arrow-down-right.svg)
 */
const SquareArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 464l0-416L16 48l0 416 416 0zm16 16l-16 0L16 480 0 480l0-16L0 48 0 32l16 0 416 0 16 0 0 16 0 416 0 16zM312 352l-144 0-8 0 0-16 8 0 124.7 0L130.3 173.7l-5.7-5.7L136 156.7l5.7 5.7L304 324.7 304 200l0-8 16 0 0 8 0 144 0 8-8 0z" />
    </Icon>
);

export default SquareArrowDownRight;