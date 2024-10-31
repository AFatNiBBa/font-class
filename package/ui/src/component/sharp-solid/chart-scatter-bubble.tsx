
import { Icon } from "../../index";

/**
 * A component that renders the `chart-scatter-bubble` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter-bubble?s=sharp-solid chart-scatter-bubble}
 * @preview ![chart-scatter-bubble](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-scatter-bubble.svg)
 */
const ChartScatterBubble: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32l0 32 0 352 416 0 32 0 0 64-32 0L32 480 0 480l0-32L0 64 0 32l64 0zm64 272a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm224-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM192 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM384 64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default ChartScatterBubble;