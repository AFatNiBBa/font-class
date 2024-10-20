
import { Icon } from "../../index";

/**
 * A component that renders the `circle-j` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-j?s=sharp-thin circle-j}
 * @preview ![circle-j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-j.svg)
 */
const CircleJ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-376l0-8-16 0 0 8 0 160c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-16 0-8-16 0 0 8 0 16c0 48.6 39.4 88 88 88s88-39.4 88-88l0-160z" />
    </Icon>
);

export default CircleJ;