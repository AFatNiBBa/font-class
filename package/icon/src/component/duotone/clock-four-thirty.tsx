
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-four-thirty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-four-thirty?s=duotone clock-four-thirty}
 * @preview ![clock-four-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-four-thirty.svg)
 */
const ClockFourThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232 0c0-8.9 4.9-17 12.7-21.2s17.3-3.7 24.6 1.2l96 64c6.9 4.6 10.7 12.2 10.7 20c0 4.6-1.3 9.2-4 13.3c-7.4 11-22.3 14-33.3 6.7L280 300.8l0 91.2c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136z" />
        <path d="M256 416c13.3 0 24-10.7 24-24l0-91.2L338.7 340c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3l-96-64c-7.4-4.9-16.8-5.4-24.6-1.2S232 247.1 232 256l0 136c0 13.3 10.7 24 24 24z" />
    </Icon>
);

export default ClockFourThirty;