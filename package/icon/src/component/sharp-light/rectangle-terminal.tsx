
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-terminal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-terminal?s=sharp-light rectangle-terminal}
 * @preview ![rectangle-terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rectangle-terminal.svg)
 */
const RectangleTerminal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 64l0 384L32 448 32 64l448 0zM32 32L0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-32 0-384 0-32-32 0L32 32zM89.4 160l11.3 11.3L185.4 256l-84.7 84.7L89.4 352 112 374.6l11.3-11.3 96-96L230.6 256l-11.3-11.3-96-96L112 137.4 89.4 160zM224 352l-16 0 0 32 16 0 176 0 16 0 0-32-16 0-176 0z" />
    </Icon>
);

export default RectangleTerminal;