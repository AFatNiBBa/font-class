
import { Icon } from "../../index";

/**
 * A component that renders the `square-terminal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-terminal?s=sharp-light square-terminal}
 * @preview ![square-terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-terminal.svg)
 */
const SquareTerminal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32zM73.4 160l11.3 11.3L169.4 256 84.7 340.7 73.4 352 96 374.6l11.3-11.3 96-96L214.6 256l-11.3-11.3-96-96L96 137.4 73.4 160zM208 352l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0z" />
    </Icon>
);

export default SquareTerminal;