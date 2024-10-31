
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-terminal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-terminal?s=sharp-thin rectangle-terminal}
 * @preview ![rectangle-terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rectangle-terminal.svg)
 */
const RectangleTerminal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 48l0 416L16 464 16 48l480 0zM16 32L0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-16 0-416 0-16-16 0L16 32zM92.7 160.5l5.9 5.4L196.2 256 98.6 346.1l-5.9 5.4 10.9 11.8 5.9-5.4 104-96 6.4-5.9-6.4-5.9-104-96-5.9-5.4L92.7 160.5zM200 368l-8 0 0 16 8 0 208 0 8 0 0-16-8 0-208 0z" />
    </Icon>
);

export default RectangleTerminal;