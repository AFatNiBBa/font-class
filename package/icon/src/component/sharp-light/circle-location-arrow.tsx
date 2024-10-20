
import { Icon } from "../../index";

/**
 * A component that renders the `circle-location-arrow` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-location-arrow?s=sharp-light circle-location-arrow}
 * @preview ![circle-location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-location-arrow.svg)
 */
const CircleLocationArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm264.6 15.4l9.5 41.1L316 196 199.5 238l41.1 9.5 19.5 4.5 4.5 19.5zm-31.2 7.2L143.9 258 86.3 244.7l55.6-20 188.2-67.7 39.1-14.1-14.1 39.1L287.3 370.1l-20 55.6L254 368.1l-20.7-89.5z" />
    </Icon>
);

export default CircleLocationArrow;