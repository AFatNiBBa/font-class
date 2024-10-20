
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-terminal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-terminal?s=sharp-duotone-solid square-terminal}
 * @preview ![square-terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-terminal.svg)
 */
const SquareTerminal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM62.1 176l17 17 63 63L79 319l-17 17c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c26.7-26.7 53.3-53.3 80-80c5.7-5.7 11.3-11.3 17-17l-17-17-80-80-17-17C84.7 153.4 73.4 164.7 62.1 176zM192 336c0 16 0 32 0 48l24 0 144 0 24 0 0-48-24 0-144 0-24 0z" />
        <path d="M79 193l-17-17L96 142.1l17 17 80 80 17 17-17 17-80 80-17 17L62.1 336l17-17 63-63L79 193zM216 336l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0z" />
    </Icon>
);

export default SquareTerminal;