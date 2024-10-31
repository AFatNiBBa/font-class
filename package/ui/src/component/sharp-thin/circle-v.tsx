
import { Icon } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=sharp-thin circle-v}
 * @preview ![circle-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-v.svg)
 */
const CircleV: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM129.8 144l119 251.4 2.2 4.6 10.1 0 2.2-4.6L382.2 144l-17.7 0L256 373.3 147.5 144l-17.7 0z" />
    </Icon>
);

export default CircleV;