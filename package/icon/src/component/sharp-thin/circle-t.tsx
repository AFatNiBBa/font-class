
import { Icon } from "../../index";

/**
 * A component that renders the `circle-t` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=sharp-thin circle-t}
 * @preview ![circle-t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-t.svg)
 */
const CircleT: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM136 144l-8 0 0 16 8 0 112 0 0 232 0 8 16 0 0-8 0-232 112 0 8 0 0-16-8 0-120 0-120 0z" />
    </Icon>
);

export default CircleT;