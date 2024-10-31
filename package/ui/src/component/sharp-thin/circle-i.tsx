
import { Icon } from "../../index";

/**
 * A component that renders the `circle-i` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-i?s=sharp-thin circle-i}
 * @preview ![circle-i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-i.svg)
 */
const CircleI: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 128l-8 0 0 16 8 0 80 0 0 224-80 0-8 0 0 16 8 0 80 0 16 0 80 0 8 0 0-16-8 0-80 0 0-224 80 0 8 0 0-16-8 0-88 0-88 0z" />
    </Icon>
);

export default CircleI;