
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-scatter-bubble` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter-bubble?s=sharp-duotone-solid chart-scatter-bubble}
 * @preview ![chart-scatter-bubble](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-scatter-bubble.svg)
 */
const ChartScatterBubble: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64l0-32L0 32z" />
        <path d="M384 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-96-16a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm64 176a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-176 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default ChartScatterBubble;