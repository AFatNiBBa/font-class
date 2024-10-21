
import { Icon } from "../../index";

/**
 * A component that renders the `chart-candlestick` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-candlestick?s=sharp-light chart-candlestick}
 * @preview ![chart-candlestick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-candlestick.svg)
 */
const ChartCandlestick: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48l0-16L0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-32-16 0L32 448 32 48zm288 0l0-16-32 0 0 16 0 48-32 0 0 32 0 96 0 32 32 0 0 48 0 16 32 0 0-16 0-48 32 0 0-32 0-96 0-32-32 0 0-48zM192 64l-32 0 0 16 0 48-32 0 0 32 0 128 0 32 32 0 0 48 0 16 32 0 0-16 0-48 32 0 0-32 0-128 0-32-32 0 0-48 0-16zm128 64l0 96-32 0 0-96 32 0zm128 96l0 64-32 0 0-64 32 0zm-32-32l-32 0 0 32 0 64 0 32 32 0 0 48 0 16 32 0 0-16 0-48 32 0 0-32 0-64 0-32-32 0 0-48 0-16-32 0 0 16 0 48zM160 160l32 0 0 128-32 0 0-128z" />
    </Icon>
);

export default ChartCandlestick;