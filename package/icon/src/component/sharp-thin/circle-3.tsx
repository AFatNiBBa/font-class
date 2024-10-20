
import { Icon } from "../../index";

/**
 * A component that renders the `circle-3` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-3?s=sharp-thin circle-3}
 * @preview ![circle-3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-3.svg)
 */
const Circle_3: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm72-384l-160 0-8 0 0 16 8 0 138.7 0-112 98-2.7 2.4 0 11.7 8 0 79.5-.4c31.1-.1 56.4 25.1 56.4 56.2c0 31-25.2 56.2-56.2 56.2l-71.1 0c-12.1 0-23.2-6.8-28.6-17.7l-4.9-9.9-3.6-7.2-14.3 7.2 3.6 7.2 4.9 9.9c8.1 16.3 24.8 26.5 42.9 26.5l71.1 0c39.9 0 72.2-32.3 72.2-72.2c0-40-32.5-72.4-72.5-72.2l-58.1 .3L333.3 142l2.7-2.4 0-11.6-8 0z" />
    </Icon>
);

export default Circle_3;