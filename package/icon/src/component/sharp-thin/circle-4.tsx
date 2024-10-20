
import { Icon } from "../../index";

/**
 * A component that renders the `circle-4` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-4?s=sharp-thin circle-4}
 * @preview ![circle-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-4.svg)
 */
const Circle_4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320-64l0 8 0 104 24 0 8 0 0 16-8 0-24 0 0 56 0 8-16 0 0-8 0-56-144 0-11.9 0 4.5-11 74-181 17.3 0-72 176L304 304l0-104 0-8 16 0z" />
    </Icon>
);

export default Circle_4;