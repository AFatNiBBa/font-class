
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line?s=light chart-line}
 * @preview ![chart-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chart-line.svg)
 */
const ChartLine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48L0 400c0 44.2 35.8 80 80 80l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 448c-26.5 0-48-21.5-48-48L32 48zM475.3 155.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L320 265.4l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 214.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0l144-144z" />
    </Icon>
);

export default ChartLine;