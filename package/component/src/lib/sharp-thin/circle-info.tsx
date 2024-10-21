
import { Icon } from "../../index";

/**
 * A component that renders the `circle-info` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-info?s=sharp-thin circle-info}
 * @preview ![circle-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-info.svg)
 */
const CircleInfo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352l-8 0 0 16 8 0 40 0 16 0 40 0 8 0 0-16-8 0-40 0 0-136 0-8-8 0-32 0-8 0 0 16 8 0 24 0 0 128-40 0zm64-176l0-32-32 0 0 32 32 0z" />
    </Icon>
);

export default CircleInfo;