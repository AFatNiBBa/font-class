
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-trend-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-trend-up?s=duotone arrow-trend-up}
 * @preview ![arrow-trend-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-trend-up.svg)
 */
const ArrowTrendUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384c0 8.2 3.1 16.4 9.4 22.6s14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L192 269.3 297.4 374.6c12.5 12.5 32.8 12.5 45.3 0L512 205.3l0-45.3-45.3 0L320 306.7 214.6 201.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160C3.1 367.6 0 375.8 0 384z" />
        <path d="M352 128c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-128 0c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default ArrowTrendUp;