
import { Icon } from "../../index";

/**
 * A component that renders the `clock-six` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-six?s=thin clock-six}
 * @preview ![clock-six](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock-six.svg)
 */
const ClockSix: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 104l0 272c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-272c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default ClockSix;