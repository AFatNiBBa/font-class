
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eight-thirty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eight-thirty?s=sharp-thin clock-eight-thirty}
 * @preview ![clock-eight-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clock-eight-thirty.svg)
 */
const ClockEightThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 0 480 0A240 240 0 1 0 16 256zm496 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM248 408l0-137.1-83.6 55.7-6.7 4.4-8.9-13.3 6.7-4.4 96-64 12.4-8.3 0 14.9 0 152 0 8-16 0 0-8z" />
    </Icon>
);

export default ClockEightThirty;