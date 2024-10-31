
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-terminal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-terminal?s=sharp-solid rectangle-terminal}
 * @preview ![rectangle-terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rectangle-terminal.svg)
 */
const RectangleTerminal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 448L0 480 0 32zM94.1 176l17 17 63 63-63 63-17 17L128 369.9l17-17 80-80 17-17-17-17-80-80-17-17L94.1 176zM248 336l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default RectangleTerminal;