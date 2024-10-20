
import { Icon } from "../../index";

/**
 * A component that renders the `circle-y` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-y?s=sharp-regular circle-y}
 * @preview ![circle-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-y.svg)
 */
const CircleY: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 295.9l0 80.1 0 24 48 0 0-24 0-80.1L391.4 144l-59.5 0L256 247.4 180.2 144l-59.5 0L232 295.9z" />
    </Icon>
);

export default CircleY;