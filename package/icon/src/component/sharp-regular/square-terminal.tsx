
import { Icon } from "../../index";

/**
 * A component that renders the `square-terminal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-terminal?s=sharp-regular square-terminal}
 * @preview ![square-terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-terminal.svg)
 */
const SquareTerminal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 352L48 432 48 80l352 0zM48 32L0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32zM86.1 169.5l17.7 16.2L180.5 256l-76.7 70.3L86.1 342.5l32.4 35.4 17.7-16.2 96-88L251.5 256l-19.3-17.7-96-88-17.7-16.2L86.1 169.5zM216 336l-24 0 0 48 24 0 112 0 24 0 0-48-24 0-112 0z" />
    </Icon>
);

export default SquareTerminal;