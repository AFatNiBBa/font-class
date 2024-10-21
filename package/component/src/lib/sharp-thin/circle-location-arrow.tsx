
import { Icon } from "../../index";

/**
 * A component that renders the `circle-location-arrow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-location-arrow?s=sharp-thin circle-location-arrow}
 * @preview ![circle-location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-location-arrow.svg)
 */
const CircleLocationArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm249 19l21.7 94.1 71.9-199.7L142.9 241.3 237 263l9.7 2.2L249 275zm-15.6 3.6L115.1 251.3l-28.8-6.6 27.8-10 235.5-84.8 19.5-7-7 19.5L277.3 397.9l-10 27.8-6.6-28.8L233.4 278.6z" />
    </Icon>
);

export default CircleLocationArrow;