
import { Icon } from "../../index";

/**
 * A component that renders the `circle-w` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-w?s=sharp-thin circle-w}
 * @preview ![circle-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-w.svg)
 */
const CircleW: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM117.6 144l66.7 250.1 1.6 5.9 12.1 0 1.7-5.7L256 204.2l56.3 190.1L314 400l12.1 0 1.6-5.9L394.4 144l-16.6 0L319.6 362.5 263.7 173.7 259.6 160l-7.2 0-4.1 13.7L192.4 362.5 134.1 144l-16.6 0z" />
    </Icon>
);

export default CircleW;