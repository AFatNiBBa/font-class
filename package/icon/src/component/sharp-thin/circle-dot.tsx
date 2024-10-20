
import { Icon } from "../../index";

/**
 * A component that renders the `circle-dot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dot?s=sharp-thin circle-dot}
 * @preview ![circle-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-dot.svg)
 */
const CircleDot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm336 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-176 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default CircleDot;