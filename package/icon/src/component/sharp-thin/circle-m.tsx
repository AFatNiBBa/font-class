
import { Icon } from "../../index";

/**
 * A component that renders the `circle-m` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-m?s=sharp-thin circle-m}
 * @preview ![circle-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-m.svg)
 */
const CircleM: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 136l0 240 0 8 16 0 0-8 0-215L249.5 308.6l6.5 9.1 6.5-9.1L368 161l0 215 0 8 16 0 0-8 0-240 0-8-12.1 0-2.4 3.4L256 290.2 142.5 131.4l-2.4-3.4L128 128l0 8z" />
    </Icon>
);

export default CircleM;