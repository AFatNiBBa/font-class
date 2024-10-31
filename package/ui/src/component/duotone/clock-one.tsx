
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-one` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-one?s=duotone clock-one}
 * @preview ![clock-one](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-one.svg)
 */
const ClockOne: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56.7 20-30c7.4-11 22.3-14 33.3-6.7c6.9 4.6 10.7 12.2 10.7 20c0 4.6-1.3 9.2-4 13.3l-64 96c-5.9 8.8-16.8 12.7-26.9 9.7s-17-12.4-17-23l0-136z" />
        <path d="M256 96c13.3 0 24 10.7 24 24l0 56.7 20-30c7.4-11 22.3-14 33.3-6.7s14 22.3 6.7 33.3l-64 96c-5.9 8.8-16.8 12.7-26.9 9.7s-17-12.4-17-23l0-136c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ClockOne;