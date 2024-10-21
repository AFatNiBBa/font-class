
import { Icon } from "../../index";

/**
 * A component that renders the `circle-p` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-p?s=sharp-thin circle-p}
 * @preview ![circle-p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-p.svg)
 */
const CircleP: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 128l-8 0 0 8 0 160 0 80 0 8 16 0 0-8 0-72 96 0c48.6 0 88-39.4 88-88s-39.4-88-88-88l-104 0zM272 288l-96 0 0-144 96 0c39.8 0 72 32.2 72 72s-32.2 72-72 72z" />
    </Icon>
);

export default CircleP;