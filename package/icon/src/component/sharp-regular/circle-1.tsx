
import { Icon } from "../../index";

/**
 * A component that renders the `circle-1` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-1?s=sharp-regular circle-1}
 * @preview ![circle-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-1.svg)
 */
const Circle_1: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM241.8 128l-5.4 3L176 164.5l0 54.9 11.7-6.5L232 188.3 232 336l-56 0 0 48 80 0 80 0 0-48-56 0 0-184 0-24-24 0-8 0-6.2 0z" />
    </Icon>
);

export default Circle_1;