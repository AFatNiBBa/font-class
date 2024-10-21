
import { Icon } from "../../index";

/**
 * A component that renders the `clock-four-thirty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-four-thirty?s=sharp-thin clock-four-thirty}
 * @preview ![clock-four-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clock-four-thirty.svg)
 */
const ClockFourThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM264 408l0-137.1 83.6 55.7 6.7 4.4 8.9-13.3-6.7-4.4-96-64L248 241.1l0 14.9 0 152 0 8 16 0 0-8z" />
    </Icon>
);

export default ClockFourThirty;