
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=sharp-solid circle-down}
 * @preview ![circle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-down.svg)
 */
const CircleDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM384 256l-80 0 0-128-96 0 0 128-80 0 0 16L256 400 384 272l0-16z" />
    </Icon>
);

export default CircleDown;