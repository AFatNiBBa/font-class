
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-eleven-thirty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven-thirty?s=duotone clock-eleven-thirty}
 * @preview ![clock-eleven-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-eleven-thirty.svg)
 */
const ClockElevenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm168-96c0-7.8 3.8-15.4 10.7-20c11-7.4 25.9-4.4 33.3 6.7l64 96c2.6 3.9 4 8.6 4 13.3l0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-128.7-60-90c-2.7-4.1-4-8.7-4-13.3z" />
        <path d="M256 416c-13.3 0-24-10.7-24-24l0-128.7-60-90c-7.4-11-4.4-25.9 6.7-33.3s25.9-4.4 33.3 6.7l64 96c2.6 3.9 4 8.6 4 13.3l0 136c0 13.3-10.7 24-24 24z" />
    </Icon>
);

export default ClockElevenThirty;