
import { Icon } from "../../index";

/**
 * A component that renders the `chart-candlestick` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-candlestick?s=sharp-regular chart-candlestick}
 * @preview ![chart-candlestick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chart-candlestick.svg)
 */
const ChartCandlestick: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 56l0-24L0 32 0 56 0 456l0 24 24 0 464 0 24 0 0-48-24 0L48 432 48 56zm272-8l0-16-32 0 0 16 0 48-32 0 0 160 32 0 0 48 0 16 32 0 0-16 0-48 32 0 0-160-32 0 0-48zm64 144l0 128 32 0 0 48 0 16 32 0 0-16 0-48 32 0 0-128-32 0 0-48 0-16-32 0 0 16 0 48-32 0zM224 128l-32 0 0-48 0-16-32 0 0 16 0 48-32 0 0 192 32 0 0 48 0 16 32 0 0-16 0-48 32 0 0-192z" />
    </Icon>
);

export default ChartCandlestick;