
import { Icon } from "../../index";

/**
 * A component that renders the `clock-nine-thirty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-nine-thirty?s=sharp-thin clock-nine-thirty}
 * @preview ![clock-nine-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clock-nine-thirty.svg)
 */
const ClockNineThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM264 408l0-152 0-8-8 0-120 0-8 0 0 16 8 0 112 0 0 144 0 8 16 0 0-8z" />
    </Icon>
);

export default ClockNineThirty;