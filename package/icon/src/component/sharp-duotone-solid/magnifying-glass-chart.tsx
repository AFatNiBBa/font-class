
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-chart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-chart?s=sharp-duotone-solid magnifying-glass-chart}
 * @preview ![magnifying-glass-chart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/magnifying-glass-chart.svg)
 */
const MagnifyingGlassChart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm104-16l48 0 0 24 0 64 0 24-48 0 0-24 0-64 0-24zm80-96l48 0 0 24 0 160 0 24-48 0 0-24 0-160 0-24zm80 64l48 0 0 24 0 96 0 24-48 0 0-24 0-96 0-24z" />
        <path d="M104 216l0-24 48 0 0 24 0 64 0 24-48 0 0-24 0-64zm80-96l0-24 48 0 0 24 0 160 0 24-48 0 0-24 0-160zm80 64l0-24 48 0 0 24 0 96 0 24-48 0 0-24 0-96zM441.4 486.6L330.7 376C348 363.3 363.3 348 376 330.7L486.6 441.4 509.3 464 464 509.3l-22.6-22.6z" />
    </Icon>
);

export default MagnifyingGlassChart;