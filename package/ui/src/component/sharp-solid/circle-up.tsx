
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up?s=sharp-solid circle-up}
 * @preview ![circle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-up.svg)
 */
const CircleUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM384 256l-80 0 0 128-96 0 0-128-80 0 0-16L256 112 384 240l0 16z" />
    </Icon>
);

export default CircleUp;