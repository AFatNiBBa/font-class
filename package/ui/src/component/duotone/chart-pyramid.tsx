
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-pyramid` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=duotone chart-pyramid}
 * @preview ![chart-pyramid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-pyramid.svg)
 */
const ChartPyramid: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M51 352L461 352 367.7 192l-223.4 0C113.2 245.3 82.1 298.7 51 352z" />
        <path d="M221.4 59.7L144.3 192l223.4 0L290.6 59.7c-15.4-26.5-53.7-26.5-69.1 0zM51 352L11.4 419.8C-4.2 446.5 15.1 480 45.9 480l420.1 0c30.9 0 50.1-33.5 34.6-60.2L461 352 51 352z" />
    </Icon>
);

export default ChartPyramid;