
import { Icon } from "../../index";

/**
 * A component that renders the `circle-l` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-l?s=sharp-thin circle-l}
 * @preview ![circle-l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-l.svg)
 */
const CircleL: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 136l0-8-16 0 0 8 0 240 0 8 8 0 176 0 8 0 0-16-8 0-168 0 0-232z" />
    </Icon>
);

export default CircleL;