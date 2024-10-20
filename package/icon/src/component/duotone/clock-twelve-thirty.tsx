
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-twelve-thirty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-twelve-thirty?s=duotone clock-twelve-thirty}
 * @preview ![clock-twelve-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-twelve-thirty.svg)
 */
const ClockTwelveThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 240c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-240z" />
        <path d="M256 128c13.3 0 24 10.7 24 24l0 240c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-240c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ClockTwelveThirty;