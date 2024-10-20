
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-trend-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-trend-up?s=sharp-duotone-solid arrow-trend-up}
 * @preview ![arrow-trend-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-trend-up.svg)
 */
const ArrowTrendUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M9.4 361.4l45.3 45.3L192 269.3 297.4 374.6 320 397.3l22.6-22.6L512 205.3l0-45.3-45.3 0L320 306.7 214.6 201.4 192 178.7l-22.6 22.6-160 160z" />
        <path d="M352 96l32 0 160 0 32 0 0 32 0 160 0 32-64 0 0-32 0-128-128 0-32 0 0-64z" />
    </Icon>
);

export default ArrowTrendUp;