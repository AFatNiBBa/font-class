
import { Icon } from "../../index";

/**
 * A component that renders the `square-terminal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-terminal?s=sharp-solid square-terminal}
 * @preview ![square-terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-terminal.svg)
 */
const SquareTerminal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zM62.1 176l17 17 63 63L79 319l-17 17L96 369.9l17-17 80-80 17-17-17-17-80-80-17-17L62.1 176zM216 336l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default SquareTerminal;