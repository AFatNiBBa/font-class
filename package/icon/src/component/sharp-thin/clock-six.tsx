
import { Icon } from "../../index";

/**
 * A component that renders the `clock-six` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-six?s=sharp-thin clock-six}
 * @preview ![clock-six](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clock-six.svg)
 */
const ClockSix: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 104l0 272 0 8-16 0 0-8 0-272 0-8 16 0 0 8z" />
    </Icon>
);

export default ClockSix;