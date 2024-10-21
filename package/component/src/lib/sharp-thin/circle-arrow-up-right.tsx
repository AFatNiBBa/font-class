
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-right?s=sharp-thin circle-arrow-up-right}
 * @preview ![circle-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-arrow-up-right.svg)
 */
const CircleArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm88 160l8 0 0 8 0 144 0 8-16 0 0-8 0-124.7L173.7 349.7l-5.7 5.7L156.7 344l5.7-5.7L324.7 176 200 176l-8 0 0-16 8 0 144 0z" />
    </Icon>
);

export default CircleArrowUpRight;