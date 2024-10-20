
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-candlestick` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-candlestick?s=duotone chart-candlestick}
 * @preview ![chart-candlestick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-candlestick.svg)
 */
const ChartCandlestick: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
        <path d="M304 32c8.8 0 16 7.2 16 16l0 48c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l0-48c0-8.8 7.2-16 16-16zM416 192l0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zM128 160c0-17.7 14.3-32 32-32l0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48c-17.7 0-32-14.3-32-32l0-128z" />
    </Icon>
);

export default ChartCandlestick;