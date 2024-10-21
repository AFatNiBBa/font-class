
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-waterfall` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-waterfall?s=sharp-duotone-solid chart-waterfall}
 * @preview ![chart-waterfall](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-waterfall.svg)
 */
const ChartWaterfall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64l0-32L0 32z" />
        <path d="M384 64l-64 0 0 32 0 64 0 32 64 0 0-32 0-64 0-32zm-96 96l0-32-64 0 0 32 0 64 0 32 64 0 0-32 0-64zm-96 96l0-32-64 0 0 32 0 64 0 32 64 0 0-32 0-64zM480 96l0-32-64 0 0 32 0 224 0 32 64 0 0-32 0-224z" />
    </Icon>
);

export default ChartWaterfall;