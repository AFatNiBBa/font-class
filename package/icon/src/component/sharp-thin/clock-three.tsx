
import { Icon } from "../../index";

/**
 * A component that renders the `clock-three` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-three?s=sharp-thin clock-three}
 * @preview ![clock-three](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clock-three.svg)
 */
const ClockThree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM248 104l0 152 0 8 8 0 120 0 8 0 0-16-8 0-112 0 0-144 0-8-16 0 0 8z" />
    </Icon>
);

export default ClockThree;