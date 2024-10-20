
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-chart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-chart?s=duotone magnifying-glass-chart}
 * @preview ![magnifying-glass-chart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/magnifying-glass-chart.svg)
 */
const MagnifyingGlassChart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm104 8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64zm80-96c0-13.3 10.7-24 24-24s24 10.7 24 24l0 160c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-160zm80 64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 96c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96z" />
        <path d="M104 216c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64zm80-96c0-13.3 10.7-24 24-24s24 10.7 24 24l0 160c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-160zm80 64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 96c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96zM457.4 502.6L330.7 376C348 363.3 363.3 348 376 330.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z" />
    </Icon>
);

export default MagnifyingGlassChart;