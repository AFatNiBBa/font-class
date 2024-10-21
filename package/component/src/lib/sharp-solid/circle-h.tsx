
import { Icon } from "../../index";

/**
 * A component that renders the `circle-h` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-h?s=sharp-solid circle-h}
 * @preview ![circle-h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-h.svg)
 */
const CircleH: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM368 152l0 104 0 104 0 24-48 0 0-24 0-80-128 0 0 80 0 24-48 0 0-24 0-80 0-48 0-80 0-24 48 0 0 24 0 80 128 0 0-80 0-24 48 0 0 24z" />
    </Icon>
);

export default CircleH;