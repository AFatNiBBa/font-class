
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=sharp-regular circle-down}
 * @preview ![circle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-down.svg)
 */
const CircleDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM368 288l0-32-64 0 0-128-96 0 0 128-64 0 0 32 112 96 112-96z" />
    </Icon>
);

export default CircleDown;