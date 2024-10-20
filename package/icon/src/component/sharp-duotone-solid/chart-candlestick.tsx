
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-candlestick` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-candlestick?s=sharp-duotone-solid chart-candlestick}
 * @preview ![chart-candlestick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-candlestick.svg)
 */
const ChartCandlestick: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64l0-32L0 32z" />
        <path d="M320 32l0 16 0 48 32 0 0 160-32 0 0 48 0 16-32 0 0-16 0-48-32 0 0-160 32 0 0-48 0-16 32 0zm96 160l0-48 0-16 32 0 0 16 0 48 32 0 0 128-32 0 0 48 0 16-32 0 0-16 0-48-32 0 0-128 32 0zM192 128l32 0 0 192-32 0 0 48 0 16-32 0 0-16 0-48-32 0 0-192 32 0 0-48 0-16 32 0 0 16 0 48z" />
    </Icon>
);

export default ChartCandlestick;