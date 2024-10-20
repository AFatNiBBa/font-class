
import { Icon } from "../../index";

/**
 * A component that renders the `stairs` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=sharp-light stairs}
 * @preview ![stairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/stairs.svg)
 */
const Stairs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 32l16 0 128 0 16 0 0 32-16 0L448 64l0 112 0 16-16 0-128 0 0 144 0 16-16 0-128 0 0 112 0 16-16 0L16 480 0 480l0-32 16 0 112 0 0-112 0-16 16 0 128 0 0-144 0-16 16 0 128 0 0-112 0-16z" />
    </Icon>
);

export default Stairs;