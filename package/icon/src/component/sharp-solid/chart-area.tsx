
import { Icon } from "../../index";

/**
 * A component that renders the `chart-area` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-area?s=sharp-solid chart-area}
 * @preview ![chart-area](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-area.svg)
 */
const ChartArea: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l0-32L0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64zm64 288l352 0 0-112L384 128l-64 64L240 96 128 224l0 128z" />
    </Icon>
);

export default ChartArea;