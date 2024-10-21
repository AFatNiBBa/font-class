
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line?s=thin chart-line}
 * @preview ![chart-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chart-line.svg)
 */
const ChartLine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 408c0 39.8 32.2 72 72 72l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 464c-30.9 0-56-25.1-56-56L16 40zM477.7 141.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L320 276.7l-90.3-90.3c-3.1-3.1-8.2-3.1-11.3 0l-128 128c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L224 203.3l90.3 90.3c3.1 3.1 8.2 3.1 11.3 0l152-152z" />
    </Icon>
);

export default ChartLine;