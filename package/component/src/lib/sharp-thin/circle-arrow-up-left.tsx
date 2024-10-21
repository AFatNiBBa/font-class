
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-left?s=sharp-thin circle-arrow-up-left}
 * @preview ![circle-arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-arrow-up-left.svg)
 */
const CircleArrowUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 160l-8 0 0 8 0 144 0 8 16 0 0-8 0-124.7L338.3 349.7l5.7 5.7L355.3 344l-5.7-5.7L187.3 176 312 176l8 0 0-16-8 0-144 0z" />
    </Icon>
);

export default CircleArrowUpLeft;