
import { Icon } from "../../index";

/**
 * A component that renders the `circle-h` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-h?s=thin circle-h}
 * @preview ![circle-h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-h.svg)
 */
const CircleH: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-376l0 112-160 0 0-112c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 240c0 4.4 3.6 8 8 8s8-3.6 8-8l0-112 160 0 0 112c0 4.4 3.6 8 8 8s8-3.6 8-8l0-120 0-120c0-4.4-3.6-8-8-8s-8 3.6-8 8z" />
    </Icon>
);

export default CircleH;