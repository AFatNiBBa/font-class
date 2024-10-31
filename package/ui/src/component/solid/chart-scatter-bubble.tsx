
import { Icon } from "../../index";

/**
 * A component that renders the `chart-scatter-bubble` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter-bubble?s=solid chart-scatter-bubble}
 * @preview ![chart-scatter-bubble](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chart-scatter-bubble.svg)
 */
const ChartScatterBubble: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 272a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm224-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM192 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM384 64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default ChartScatterBubble;