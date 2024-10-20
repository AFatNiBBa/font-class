
import { Icon } from "../../index";

/**
 * A component that renders the `clock-six` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-six?s=sharp-light clock-six}
 * @preview ![clock-six](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clock-six.svg)
 */
const ClockSix: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 112l0 256 0 16-32 0 0-16 0-256 0-16 32 0 0 16z" />
    </Icon>
);

export default ClockSix;