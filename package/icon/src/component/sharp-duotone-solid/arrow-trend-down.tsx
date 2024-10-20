
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-trend-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-trend-down?s=sharp-duotone-solid arrow-trend-down}
 * @preview ![arrow-trend-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-trend-down.svg)
 */
const ArrowTrendDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M9.4 150.6l160 160L192 333.3l22.6-22.6L320 205.3 466.7 352l45.3 0 0-45.3L342.6 137.4 320 114.7l-22.6 22.6L192 242.7 54.6 105.4 9.4 150.6z" />
        <path d="M352 416l32 0 160 0 32 0 0-32 0-160 0-32-64 0 0 32 0 128-128 0-32 0 0 64z" />
    </Icon>
);

export default ArrowTrendDown;