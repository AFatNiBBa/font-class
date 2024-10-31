
import { Icon } from "../../index";

/**
 * A component that renders the `circle-1` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-1?s=sharp-thin circle-1}
 * @preview ![circle-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-1.svg)
 */
const Circle_1: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM184 368l8 0 56 0 0-222.2-51.4 36.7-4.6 3.3 0-19.7 51.4-36.7 2.1-1.5 2.6 0 8 0 8 0 0 8 0 232 56 0 8 0 0 16-8 0-64 0-64 0-8 0 0-16z" />
    </Icon>
);

export default Circle_1;