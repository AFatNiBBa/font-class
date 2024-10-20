
import { Icon } from "../../index";

/**
 * A component that renders the `circle-location-arrow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-location-arrow?s=sharp-solid circle-location-arrow}
 * @preview ![circle-location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-location-arrow.svg)
 */
const CircleLocationArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM233.4 278.6L86.3 244.7 369.1 142.9 267.3 425.7 233.4 278.6z" />
    </Icon>
);

export default CircleLocationArrow;