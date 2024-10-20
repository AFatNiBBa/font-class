
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=sharp-light circle-down}
 * @preview ![circle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-down.svg)
 */
const CircleDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448zm0 480A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM224 256l0 32-32 0-18.7 0L256 370.7 338.7 288 320 288l-32 0 0-32 0-96-64 0 0 96zm32 160l-22.6-22.6L128 288l0-32 32 0 32 0 0-32 0-64 0-32 32 0 64 0 32 0 0 32 0 64 0 32 32 0 32 0 0 32L278.6 393.4 256 416z" />
    </Icon>
);

export default CircleDown;