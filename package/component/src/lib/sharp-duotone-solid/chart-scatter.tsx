
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-scatter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter?s=sharp-duotone-solid chart-scatter}
 * @preview ![chart-scatter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-scatter.svg)
 */
const ChartScatter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64l0-32L0 32z" />
        <path d="M448 96l-64 0 0 64 64 0 0-64zM160 128l0 64 64 0 0-64-64 0zm32 160l-64 0 0 64 64 0 0-64zm128-64l-64 0 0 64 64 0 0-64zm32 128l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default ChartScatter;