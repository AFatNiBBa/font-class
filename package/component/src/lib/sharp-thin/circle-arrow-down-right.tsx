
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-right?s=sharp-thin circle-arrow-down-right}
 * @preview ![circle-arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-arrow-down-right.svg)
 */
const CircleArrowDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 1 0-480 240 240 0 1 1 0 480zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zm88 352l8 0 0-8 0-144 0-8-16 0 0 8 0 124.7L173.7 162.3l-5.7-5.7L156.7 168l5.7 5.7L324.7 336 200 336l-8 0 0 16 8 0 144 0z" />
    </Icon>
);

export default CircleArrowDownRight;