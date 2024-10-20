
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eight` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eight?s=sharp-thin clock-eight}
 * @preview ![clock-eight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clock-eight.svg)
 */
const ClockEight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 104l0 152 0 4.3-3.6 2.4-96 64-6.7 4.4-8.9-13.3 6.7-4.4L248 251.7 248 104l0-8 16 0 0 8z" />
    </Icon>
);

export default ClockEight;