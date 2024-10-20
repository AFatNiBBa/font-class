
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-trend-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-trend-down?s=duotone arrow-trend-down}
 * @preview ![arrow-trend-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-trend-down.svg)
 */
const ArrowTrendDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128c0 8.2 3.1 16.4 9.4 22.6l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352l45.3 0 0-45.3L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4C48.4 99.1 40.2 96 32 96s-16.4 3.1-22.6 9.4S0 119.8 0 128z" />
        <path d="M352 384c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-128 0c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default ArrowTrendDown;