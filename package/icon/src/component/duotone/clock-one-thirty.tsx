
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-one-thirty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-one-thirty?s=duotone clock-one-thirty}
 * @preview ![clock-one-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-one-thirty.svg)
 */
const ClockOneThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232 0c0-4.7 1.4-9.4 4-13.3l64-96c7.4-11 22.3-14 33.3-6.7c6.9 4.6 10.7 12.2 10.7 20c0 4.6-1.3 9.2-4 13.3l-60 90L280 392c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136z" />
        <path d="M256 416c13.3 0 24-10.7 24-24l0-128.7 60-90c7.4-11 4.4-25.9-6.7-33.3s-25.9-4.4-33.3 6.7l-64 96c-2.6 3.9-4 8.6-4 13.3l0 136c0 13.3 10.7 24 24 24z" />
    </Icon>
);

export default ClockOneThirty;