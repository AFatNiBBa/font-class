
import { Icon } from "../../index";

/**
 * A component that renders the `circle-a` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-a?s=sharp-solid circle-a}
 * @preview ![circle-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-a.svg)
 */
const CircleA: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM234.3 125.8l6.5-13.8 30.5 0 6.5 13.8L391.4 368l-53 0-22.5-48-119.7 0-22.5 48-53 0L234.3 125.8zM256 192.5L218.7 272l74.6 0L256 192.5z" />
    </Icon>
);

export default CircleA;