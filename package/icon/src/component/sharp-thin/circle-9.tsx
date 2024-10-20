
import { Icon } from "../../index";

/**
 * A component that renders the `circle-9` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-9?s=sharp-thin circle-9}
 * @preview ![circle-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-9.svg)
 */
const Circle_9: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM219 384l100.2-87.6c8.6-7.6 15.7-16.5 21.1-26.3c7.5-13.7 11.7-29.3 11.7-46c0 0 0 0 0 0c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c4.3 0 8.6-.3 12.8-.8L194.7 384l24.3 0zm36.9-240a80 80 0 1 1 .1 160 80 80 0 1 1 -.1-160z" />
    </Icon>
);

export default Circle_9;