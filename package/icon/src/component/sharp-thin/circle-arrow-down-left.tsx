
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-left?s=sharp-thin circle-arrow-down-left}
 * @preview ![circle-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-arrow-down-left.svg)
 */
const CircleArrowDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480zm0 496A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM168 352l-8 0 0-8 0-144 0-8 16 0 0 8 0 124.7L338.3 162.3l5.7-5.7L355.3 168l-5.7 5.7L187.3 336 312 336l8 0 0 16-8 0-144 0z" />
    </Icon>
);

export default CircleArrowDownLeft;