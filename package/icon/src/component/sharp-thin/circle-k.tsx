
import { Icon } from "../../index";

/**
 * A component that renders the `circle-k` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=sharp-thin circle-k}
 * @preview ![circle-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-k.svg)
 */
const CircleK: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 128l0 8 0 162.5 0 77.5 0 8 16 0 0-8 0-74.1 58.4-56L333.5 384l19.7 0L246.5 235.3l-.4-.6L357.5 128l-23.1 0L176 279.8 176 136l0-8-16 0z" />
    </Icon>
);

export default CircleK;