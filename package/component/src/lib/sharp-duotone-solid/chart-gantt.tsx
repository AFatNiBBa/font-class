
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-gantt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-gantt?s=sharp-duotone-solid chart-gantt}
 * @preview ![chart-gantt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-gantt.svg)
 */
const ChartGantt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64l0-32L0 32z" />
        <path d="M160 96l-32 0 0 64 32 0 96 0 32 0 0-64-32 0-96 0zm64 96l-32 0 0 64 32 0 128 0 32 0 0-64-32 0-128 0zm160 96l-32 0 0 64 32 0 64 0 32 0 0-64-32 0-64 0z" />
    </Icon>
);

export default ChartGantt;