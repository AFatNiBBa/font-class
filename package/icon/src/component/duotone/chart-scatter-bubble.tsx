
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-scatter-bubble` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter-bubble?s=duotone chart-scatter-bubble}
 * @preview ![chart-scatter-bubble](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-scatter-bubble.svg)
 */
const ChartScatterBubble: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
        <path d="M384 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-96-16a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm64 176a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-176 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default ChartScatterBubble;