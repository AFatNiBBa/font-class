
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-nine-thirty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-nine-thirty?s=duotone clock-nine-thirty}
 * @preview ![clock-nine-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-nine-thirty.svg)
 */
const ClockNineThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0c0-13.3 10.7-24 24-24l104 0c13.3 0 24 10.7 24 24l0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112-80 0c-13.3 0-24-10.7-24-24z" />
        <path d="M256 416c13.3 0 24-10.7 24-24l0-136c0-13.3-10.7-24-24-24l-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0 0 112c0 13.3 10.7 24 24 24z" />
    </Icon>
);

export default ClockNineThirty;