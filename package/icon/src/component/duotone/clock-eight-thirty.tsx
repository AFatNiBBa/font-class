
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-eight-thirty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eight-thirty?s=duotone clock-eight-thirty}
 * @preview ![clock-eight-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-eight-thirty.svg)
 */
const ClockEightThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm140 77.3c-7.4-11-4.4-25.9 6.7-33.3l96-64c7.4-4.9 16.8-5.4 24.6-1.2S280 247.1 280 256l0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-91.2L173.3 340c-11 7.4-25.9 4.4-33.3-6.7z" />
        <path d="M256 416c-13.3 0-24-10.7-24-24l0-91.2L173.3 340c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l96-64c7.4-4.9 16.8-5.4 24.6-1.2S280 247.1 280 256l0 136c0 13.3-10.7 24-24 24z" />
    </Icon>
);

export default ClockEightThirty;