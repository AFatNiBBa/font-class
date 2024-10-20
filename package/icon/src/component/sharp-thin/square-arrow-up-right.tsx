
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-up-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up-right?s=sharp-thin square-arrow-up-right}
 * @preview ![square-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-arrow-up-right.svg)
 */
const SquareArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 416L16 464 16 48l416 0zm16-16l-16 0L16 32 0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16zM312 160l-144 0-8 0 0 16 8 0 124.7 0L130.3 338.3l-5.7 5.7L136 355.3l5.7-5.7L304 187.3 304 312l0 8 16 0 0-8 0-144 0-8-8 0z" />
    </Icon>
);

export default SquareArrowUpRight;