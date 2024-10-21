
import { Icon } from "../../index";

/**
 * A component that renders the `square-info` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-info?s=sharp-thin square-info}
 * @preview ![square-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-info.svg)
 */
const SquareInfo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM176 352l40 0 0-128-24 0-8 0 0-16 8 0 32 0 8 0 0 8 0 136 40 0 8 0 0 16-8 0-40 0-16 0-40 0-8 0 0-16 8 0zm64-208l0 32-32 0 0-32 32 0z" />
    </Icon>
);

export default SquareInfo;